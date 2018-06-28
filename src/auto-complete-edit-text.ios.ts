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
    private _hkTextViewDelegate: HKWTextViewDelegateImpl;

    constructor() {
        super();
    }

    public createNativeView() {
        const hkwTextView = new HKWTextView();
        return hkwTextView;
    }

    public disposeNativeView() {
        this._hkTextViewDelegate = null;
    }

    public onLoaded() {
        super.onLoaded();
        this._hkTextViewDelegate = HKWTextViewDelegateImpl.initWithOwner(new WeakRef<AutoCompleteEditText>(this))
        this.nativeView.delegate = this._hkTextViewDelegate;
    }

    public onUnLoaded() {
        this.nativeView.delegate = null;
        super.onUnloaded();
    }

    detectHashTagMention() {
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

    public [hashtagColorProperty.setNative](value: Color) {
        this.hashtagColor = value;
        this.detectHashTagMention();
    }

    public [hashtagColorCssProperty.setNative](value: Color) {
        this.hashtagColor = value;
        this.detectHashTagMention();
    }

    public [mentionColorProperty.setNative](value: Color) {
        this.mentionColor = value;
        this.detectHashTagMention();
    }

    public [mentionColorCssProperty.setNative](value: Color) {
        this.mentionColor = value;
        this.detectHashTagMention();
    }
}

@ObjCClass(HKWTextViewDelegate)
export class HKWTextViewDelegateImpl extends NSObject implements HKWTextViewDelegate {
    public owner: WeakRef<AutoCompleteEditText>;
    public _originalDelegate: UITextViewDelegate;

    public static initWithOwner(owner: WeakRef<AutoCompleteEditText>): HKWTextViewDelegateImpl {
        const delegate = HKWTextViewDelegateImpl.new() as HKWTextViewDelegateImpl;
        delegate.owner = owner;
        delegate._originalDelegate = owner.get().ios.delegate;
        return delegate;
    }

    public textViewShouldBeginEditing(textView: UITextView): boolean {
        return this._originalDelegate.textViewShouldBeginEditing(textView);
    }

    public textViewDidBeginEditing(textView: UITextView) {
        this._originalDelegate.textViewDidBeginEditing(textView);
    }

    public textViewDidEndEditing(textView: UITextView) {
        this._originalDelegate.textViewDidEndEditing(textView);
    }

    public textViewDidChange(textView: UITextView): void {
        this._originalDelegate.textViewDidChange(textView);
        this.owner.get().detectHashTagMention();
    }

    public textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, replacementString: string): boolean {
        return this._originalDelegate.textViewShouldChangeTextInRangeReplacementText(textView, range, replacementString);
    }

    public scrollViewDidScroll(sv: UIScrollView): void {
        this._originalDelegate.scrollViewDidScroll(sv);
    }
}