import { Common, hashtagColorProperty, hashtagColorCssProperty, mentionColorProperty, mentionColorCssProperty } from './auto-complete-edit-text.common';
import { View, Property } from "tns-core-modules/ui/core/view";
import * as utils from "tns-core-modules/utils/utils";
import app = require("tns-core-modules/application");
import { Color } from "tns-core-modules/color";

global.moduleMerge(Common, exports);
export declare namespace com {
    module hendraanggrian {
        module widget {
            class SocialAutoCompleteTextView {
                public constructor(context);
            }
        }
    }
}

export class AutoCompleteEditText extends Common {

    public [hashtagColorProperty.setNative](value: Color) {
        console.log("hashtagColorProperty.setNative");
        this.nativeView.setHashtagColor(value.android);
    }

    public [hashtagColorCssProperty.setNative](value: Color) {
        console.log("hashtagColorCssProperty.setNative");
        this.nativeView.setHashtagColor(value.android);
    }

    public [mentionColorProperty.setNative](value: Color) {
        console.log("mentionColorProperty.setNative");
        this.nativeView.setMentionColor(value.android);
    }

    public [mentionColorCssProperty.setNative](value: Color) {
        console.log("mentionColorCssProperty.setNative");
        this.nativeView.setMentionColor(value.android);
    }

    public createNativeView() {
        var editText: any = super.createNativeView();
        const socialAutoCompleteTextView = new com.hendraanggrian.widget.SocialAutoCompleteTextView(this._context);
        var listener = editText.listener;
        (<any>socialAutoCompleteTextView).addTextChangedListener(listener);
        (<any>socialAutoCompleteTextView).setOnFocusChangeListener(listener);
        (<any>socialAutoCompleteTextView).setOnEditorActionListener(listener);
        (<any>socialAutoCompleteTextView).listener = listener;
        return socialAutoCompleteTextView;
    }
}
