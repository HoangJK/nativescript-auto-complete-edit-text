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

    public createNativeView() {
        const hkwTextView = new HKWTextView();
        return hkwTextView;
    }

    public onLoaded() {
        super.onLoaded();
        this.hkTextViewDelegate = HKWTextViewDelegateImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this));
        this.nativeView.delegate = this.hkTextViewDelegate;
        this.initPopover();
    }

    public onUnLoaded() {
        this.nativeView.delegate = null;
        this.tableView = null;
        this.popoverView = null;
        super.onUnloaded();
    }

    refresh() {
        if (this.isMentionEditing && this.items && this.items.length > 0) {
            this.showPopover();
        }
        else {
            this.dismissPopover();
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
            this.tableView = new UITableView({ frame: CGRectMake(0, 0, this.nativeView.frame.size.width, this.nativeView.frame.size.width), style: UITableViewStyle.Plain });
            this.tableViewDelegate = TableViewDelegateImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this));
            this.tableViewDataSource = TableViewDataSourceImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this));
            this.tableView.delegate = this.tableViewDelegate;
            this.tableView.dataSource = this.tableViewDataSource;
            this.tableView.backgroundColor = UIColor.redColor;
            this.tableView.scrollEnabled = false;
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
        let cell: UITableViewCell;
        cell = new UITableViewCell({ style: UITableViewCellStyle.Default, reuseIdentifier: null });
        if (owner) {
            let getItem = (<any>owner.items).getItem;
            let item = getItem ? getItem.call(owner.items, indexPath.row) : owner.items[indexPath.row];
            let keyword = owner.mentionKeyword ? owner.mentionKeyword : "mention";
            if (!item[keyword]) {
                throw ("Property 'mentionKeyword' is empty!");
            }

            cell.textLabel.text = item[keyword];
        }
        return cell;
    }

}