import {
    Common,
    hashtagColorProperty,
    hashtagColorCssProperty,
    mentionColorProperty,
    mentionColorCssProperty,
    itemsProperty,
    itemTemplatesProperty
} from "./auto-complete-edit-text.common";
import { Color } from "tns-core-modules/color";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ListView } from "tns-core-modules/ui/list-view";
import { ProxyViewContainer } from "tns-core-modules/ui/proxy-view-container";
import { View, Property, KeyedTemplate, Template } from "tns-core-modules/ui/core/view";
import { layout } from "tns-core-modules/utils/utils";
import { Observable } from "tns-core-modules/data/observable";
import { topmost } from 'tns-core-modules/ui/frame';
import { screen, device } from 'tns-core-modules/platform';
import { ios } from 'tns-core-modules/ui/utils';

export class AutoCompleteEditText extends Common {
    nativeViewProtected: HKWTextView;
    public tableView: UITableView;
    public popoverView: Popover;
    public currentReplaceTextLocation: number;
    public currentReplaceText: string;
    public isMentionEditing: boolean = false;
    public hkTextViewDelegate: HKWTextViewDelegateImpl;
    public tableViewDelegate: TableViewDelegateImpl;
    public tableViewDataSource: TableViewDataSourceImpl;
    public map = new Map<TableViewCellImpl, View>();

    public createNativeView() {
        const hkwTextView = new HKWTextView();
        return hkwTextView;
    }

    public onLoaded() {
        super.onLoaded();
        this.nativeView.delegate = this.hkTextViewDelegate = HKWTextViewDelegateImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this));
        this.initPopover();
    }

    public onUnLoaded() {
        this.nativeView.delegate = null;
        this.tableView = null;
        this.popoverView = null;
        super.onUnloaded();
    }

    refresh() {
        this.map.forEach((view, nativeView, map) => {
            if (!(view.bindingContext instanceof Observable)) {
                view.bindingContext = null;
            }
        });
        if (this.isLoaded) {
            if (this.isMentionEditing && this.items && this.items.length > 0) {
                this.showPopover();
            }
            else {
                this.dismissPopover();
            }
        }
    }

    detectTag() {
        let that = new WeakRef<any>(this);
        this.nativeView.transformTextAtRangeWithTransformer(new NSRange({ location: 0, length: this.nativeView.text.length }), (input: NSAttributedString): NSAttributedString => {
            let stringWithTags = that.get().nativeView.text;
            let attributeString = new NSMutableAttributedString({ string: stringWithTags });
            if (that.get().hashtagColor) {
                //Detect HashTag
                let regexHashTag = new NSRegularExpression({
                    pattern: "[#](\\w+)",
                    options: NSRegularExpressionOptions.CaseInsensitive
                });
                let matchesHashTag = regexHashTag.matchesInStringOptionsRange(stringWithTags, NSMatchingOptions.ReportProgress, new NSRange({ location: 0, length: stringWithTags.length }));
                for (let i = 0; i < matchesHashTag.count; i++) {
                    let matchRes = matchesHashTag.objectAtIndex(i);
                    let wordRange = matchRes.rangeAtIndex(0);
                    attributeString.addAttributesRange(NSDictionary.dictionaryWithObjectForKey(that.get().hashtagColor.ios, NSForegroundColorAttributeName), wordRange);
                }
            }

            if (that.get().mentionColor) {
                //Detect Mention
                let regexMention = new NSRegularExpression({
                    pattern: "[@](\\w+)",
                    options: NSRegularExpressionOptions.CaseInsensitive
                });
                let matchesMention = regexMention.matchesInStringOptionsRange(stringWithTags, NSMatchingOptions.ReportProgress, new NSRange({ location: 0, length: stringWithTags.length }));
                for (let i = 0; i < matchesMention.count; i++) {
                    let matchRes = matchesMention.objectAtIndex(i);
                    let wordRange = matchRes.rangeAtIndex(0);
                    attributeString.addAttributesRange(NSDictionary.dictionaryWithObjectForKey(that.get().mentionColor.ios, NSForegroundColorAttributeName), wordRange);
                }
            }
            return attributeString;
        });
    }

    detectMentionTextChanged() {
        let stringWithTags = this.nativeView.text;
        let regexMention = new NSRegularExpression({
            pattern: "[@](\\w+)",
            options: NSRegularExpressionOptions.CaseInsensitive
        });
        let matchesMention = regexMention.matchesInStringOptionsRange(stringWithTags, NSMatchingOptions.ReportProgress, new NSRange({ location: 0, length: stringWithTags.length }));
        for (let i = 0; i < matchesMention.count; i++) {
            let matchRes = matchesMention.objectAtIndex(i);
            let wordRange = matchRes.rangeAtIndex(0);
            if (this.currentReplaceTextLocation >= wordRange.location && this.currentReplaceTextLocation < (wordRange.location + wordRange.length)) {
                this.isMentionEditing = true;
                let args = {
                    eventName: Common.mentionTextChangedEvent,
                    object: this.nativeView,
                    text: this.text.slice(wordRange.location + 1, wordRange.location + wordRange.length)
                };
                this.notify(args);
                return;
            }
        }
        this.isMentionEditing = false;
        this.refresh();
    }

    detectHashTagTextChanged() {
        let mentionEditing = false;
        let stringWithTags = this.nativeView.text;
        let regexMention = new NSRegularExpression({
            pattern: "[#](\\w+)",
            options: NSRegularExpressionOptions.CaseInsensitive
        });
        let matchesMention = regexMention.matchesInStringOptionsRange(stringWithTags, NSMatchingOptions.ReportProgress, new NSRange({ location: 0, length: stringWithTags.length }));
        for (let i = 0; i < matchesMention.count; i++) {
            let matchRes = matchesMention.objectAtIndex(i);
            let wordRange = matchRes.rangeAtIndex(0);
            if (this.currentReplaceTextLocation >= wordRange.location && this.currentReplaceTextLocation < (wordRange.location + wordRange.length)) {
                console.log("-----hashTagEditing----");
            }
        }
    }

    showPopover() {
        this.initTableView();
        this.popoverView.showFromView(this.tableView, this.nativeView);
    }

    dismissPopover() {
        if (this.popoverView) {
            this.popoverView.dismiss();
        }
    }

    initPopover() {
        this.popoverView = new Popover({ showHandler: null, dismissHandler: null });
        this.popoverView.arrowSize = CGSizeMake(0, 0);
        this.popoverView.cornerRadius = 0;
        this.popoverView.animationOut = 0;
    }

    initTableView() {
        if (!this.tableView) {
            this.tableView = new UITableView({ frame: CGRectMake(0, 0, this.nativeView.frame.size.width, 135), style: UITableViewStyle.Plain });
            this.tableView.estimatedRowHeight = 44;
            this.tableView.rowHeight = UITableViewAutomaticDimension;
            this.tableView.delegate = this.tableViewDelegate = TableViewDelegateImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this));
            this.tableView.dataSource = this.tableViewDataSource = TableViewDataSourceImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this));
            this.tableView.clipsToBounds = true;
        }
        else {
            this.tableView.reloadData();
        }
    }

    public [hashtagColorProperty.setNative](value: Color) {
        this.hashtagColor = value;
        this.detectTag();
    }

    public [hashtagColorCssProperty.setNative](value: Color) {
        this.hashtagColor = value;
        this.detectTag();
    }

    public [mentionColorProperty.setNative](value: Color) {
        this.mentionColor = value;
        this.detectTag();
    }

    public [mentionColorCssProperty.setNative](value: Color) {
        this.mentionColor = value;
        this.detectTag();
    }

    [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
        return null;
    }
    [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
        this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
        if (value) {
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }
        this.refresh();
    }
}

@ObjCClass(HKWTextViewDelegate)
export class HKWTextViewDelegateImpl extends NSObject implements HKWTextViewDelegate {
    public owner: WeakRef<AutoCompleteEditText>;
    public _originalDelegate: UITextViewDelegate;

    public static initWithOwner(owner: WeakRef<AutoCompleteEditText>): HKWTextViewDelegateImpl {
        let delegate = HKWTextViewDelegateImpl.new() as HKWTextViewDelegateImpl;
        delegate.owner = owner;
        delegate._originalDelegate = owner.get().ios.delegate;
        return delegate;
    }

    public textViewShouldBeginEditing(textView: UITextView): boolean {
        return this._originalDelegate.textViewShouldBeginEditing(textView);
    }

    public textViewDidBeginEditing(textView: UITextView) {
        if (textView.text && textView.text != "") {
            this.owner.get().detectTag();
        }
        this._originalDelegate.textViewDidBeginEditing(textView);
    }

    public textViewDidEndEditing(textView: UITextView) {
        this._originalDelegate.textViewDidEndEditing(textView);
    }

    public textViewDidChange(textView: UITextView): void {
        this._originalDelegate.textViewDidChange(textView);
        if (textView.text && textView.text != "") {
            this.owner.get().detectTag();
            this.owner.get().detectMentionTextChanged();
        }
    }

    public textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, replacementString: string): boolean {
        this.owner.get().currentReplaceTextLocation = range.location - range.length;
        this.owner.get().currentReplaceText = replacementString;
        return this._originalDelegate.textViewShouldChangeTextInRangeReplacementText(textView, range, replacementString);
    }

    public scrollViewDidScroll(sv: UIScrollView): void {
        this._originalDelegate.scrollViewDidScroll(sv);
    }
}

@ObjCClass(UITableViewDelegate)
export class TableViewDelegateImpl extends NSObject implements UITableViewDelegate {
    public _owner: WeakRef<AutoCompleteEditText>;
    public static initWithOwner(owner: WeakRef<AutoCompleteEditText>): TableViewDelegateImpl {
        let delegate = TableViewDelegateImpl.new() as TableViewDelegateImpl;
        delegate._owner = owner;
        return delegate;
    }

    public tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
        let owner = this._owner.get();
        owner.dismissPopover();
    }
}

@ObjCClass(UITableViewDataSource)
export class TableViewDataSourceImpl extends NSObject implements UITableViewDataSource {
    public _owner: WeakRef<AutoCompleteEditText>;
    public static initWithOwner(owner: WeakRef<AutoCompleteEditText>): TableViewDataSourceImpl {
        let delegate = TableViewDataSourceImpl.new() as TableViewDataSourceImpl;
        delegate._owner = owner;
        return delegate;
    }

    public tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number {
        let owner = this._owner.get();
        return (owner && owner.items) ? owner.items.length : 0;
    }

    public tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell {
        let owner = this._owner.get();
        let cell: TableViewCellImpl;
        if (owner) {
            let template = owner._getItemTemplate(indexPath.row);
            cell = <TableViewCellImpl>(owner.tableView.dequeueReusableCellWithIdentifier(template.key) || TableViewCellImpl.initWithEmptyBackground());
            //prepareCell
            let cellHeight: number;
            let view = cell.view;
            if (!view) {
                view = owner._getItemTemplate(indexPath.row).createView();
            }
            let args: any = {
                eventName: "itemLoading",
                object: owner,
                index: indexPath.row,
                view: view,
                ios: cell,
                android: undefined
            };
            owner.notify(args);
            view = args.view || owner._getDefaultItemContent(indexPath.row);
            // Proxy containers should not get treated as layouts.
            // Wrap them in a real layout as well.
            if (view instanceof ProxyViewContainer) {
                let sp = new StackLayout();
                sp.addChild(view);
                view = sp;
            }
            owner._prepareItem(view, indexPath.row);
            owner.map.set(cell, view);
            if (view && !view.parent && view.nativeViewProtected) {
                if (view instanceof View) {
                    topmost()._addView(view);
                }
                cell.contentView.addSubview(view.nativeViewProtected);
                ios._layoutRootView(view, CGRectMake(0, 0, owner.tableView.frame.size.width, 44));
                cell.contentView.frame.size = view.nativeView.bounds.size;
            }
        }
        else {
            cell = TableViewCellImpl.initWithEmptyBackground();
        }
        return cell;
    }

}

export class TableViewCellImpl extends UITableViewCell {
    public static initWithEmptyBackground(): TableViewCellImpl {
        const cell = <TableViewCellImpl>TableViewCellImpl.new();
        cell.backgroundColor = null;
        return cell;
    }

    initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this {
        const cell = <this>super.initWithStyleReuseIdentifier(style, reuseIdentifier);
        cell.backgroundColor = null;
        return cell;
    }

    public willMoveToSuperview(newSuperview: UIView): void {
        let parent = <any>(this.view ? this.view.parent : null);
        if (parent && !newSuperview) {
            parent._removeContainer(this);
        }
    }

    public get view() {
        return this.owner ? this.owner.get() : null
    }

    public owner: WeakRef<any>;
}

