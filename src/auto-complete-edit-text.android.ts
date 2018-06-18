import {
    Common,
    hashtagColorProperty,
    hashtagColorCssProperty,
    mentionColorProperty,
    mentionColorCssProperty,
    itemsProperty
} from "./auto-complete-edit-text.common";
import { View, Property } from "tns-core-modules/ui/core/view";
import * as utils from "tns-core-modules/utils/utils";
import app = require("tns-core-modules/application");
import { Color } from "tns-core-modules/color";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Observable } from "tns-core-modules/data/observable";

global.moduleMerge(Common, exports);
export declare namespace com {
    module hendraanggrian {
        module widget {
            class SocialAutoCompleteTextView {
                constructor(context);
            }
            class SocialView {

            }
            class SocialAdapter<T> {
                constructor(context: any, resource: number, textViewResourceId: number);
                getItem(position: number);
            }
            class MentionAdapter extends android.widget.ArrayAdapter<any> {
                constructor(context: any);
            }
        }
        module socialview {
            class Mention {
                constructor(username?: string);
                constructor(username?: string, displayName?: string);
                constructor(username?: string, displayName?: string, avatar?: any);
            }
        }
    }
}
declare namespace kotlin {
    namespace jvm {
        namespace functions {
            class Function2<A, B, C> {
                constructor(func);
            }
        }
    }

    export class Unit {
    }
}

export class AutoCompleteEditText extends Common {

    private _mentionAdapter: any;

    //Override
    public createNativeView() {
        let editText: any = super.createNativeView();
        const socialAutoCompleteTextView = new com.hendraanggrian.widget.SocialAutoCompleteTextView(this._context);
        this._configureEditText(socialAutoCompleteTextView);
        let listener = editText.listener;
        (<any>socialAutoCompleteTextView).addTextChangedListener(listener);
        (<any>socialAutoCompleteTextView).setOnFocusChangeListener(listener);
        (<any>socialAutoCompleteTextView).setOnEditorActionListener(listener);
        (<any>socialAutoCompleteTextView).setOnTouchListener(new android.view.View.OnTouchListener({
            onTouch: function (view: any, event: any) {
                if (view && view.getParent && view.getParent()) {
                    view.getParent().requestDisallowInterceptTouchEvent(true);
                    switch (event.getAction() & android.view.MotionEvent.ACTION_MASK) {
                        case android.view.MotionEvent.ACTION_UP:
                            view.getParent().requestDisallowInterceptTouchEvent(false);
                            break;
                        default:
                            break;
                    }
                }
                return false;
            }
        }));
        (<any>socialAutoCompleteTextView).setThreshold(0);
        let that: WeakRef<AutoCompleteEditText> = new WeakRef(this);
        (<any>socialAutoCompleteTextView).setMentionTextChangedListener(new kotlin.jvm.functions.Function2<com.hendraanggrian.widget.SocialView, string, kotlin.Unit>({
            invoke: function (socialView: any, text: string) {
                if (that && that.get()) {
                    let args = {
                        eventName: Common.mentionTextChangedEvent,
                        object: socialView,
                        text: text
                    };
                    that.get().notify(args);
                }
                return null;
            }
        }));
        //Set mention adapter for auto complete
        ensureMentionAdapterClass();
        this._mentionAdapter = new MentionAdapterClass(this);
        (<any>socialAutoCompleteTextView).setMentionAdapter(this._mentionAdapter);
        (<any>socialAutoCompleteTextView).listener = listener;
        return socialAutoCompleteTextView;
    }

    //Override
    private _configureEditText(socialAutoCompleteTextView: any) {
        socialAutoCompleteTextView.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_NORMAL | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES | android.text.InputType.TYPE_TEXT_FLAG_MULTI_LINE | android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
        socialAutoCompleteTextView.setGravity(android.view.Gravity.TOP | android.view.Gravity.START);
    }

    public [hashtagColorProperty.setNative](value: Color) {
        this.nativeView.setHashtagColor(value.android);
    }

    public [hashtagColorCssProperty.setNative](value: Color) {
        this.nativeView.setHashtagColor(value.android);
    }

    public [mentionColorProperty.setNative](value: Color) {
        this.nativeView.setMentionColor(value.android);
    }

    public [mentionColorCssProperty.setNative](value: Color) {
        this.nativeView.setMentionColor(value.android);
    }

    public [itemsProperty.setNative](items: Array<any>) {
        if (items && items.length > 0) {
            this._mentionAdapter.clear();
            items.forEach((item: any) => {
                if (item.avatar) {
                    this._mentionAdapter.add(new PersonObject(item.username));
                }
                else {
                    this._mentionAdapter.add(new PersonObject(item.username));
                }
            });
        }
        else {
            this._mentionAdapter.clear();
        }
    }
}

let MentionAdapterClass;
function ensureMentionAdapterClass() {
    if (MentionAdapterClass) {
        return;
    }
    class MentionAdapter extends com.hendraanggrian.widget.SocialAdapter<PersonObject> {
        constructor(private owner: AutoCompleteEditText) {
            super(utils.ad.getApplicationContext(), 0, 0);
            return global.__native(this);
        }
        //Override
        // public getCount() {
        //     console.log("this.owner.items:", this.owner.items.length);
        //     return this.owner && this.owner.items && this.owner.items.length ? this.owner.items.length : 0;
        // }

        //Override
        public convertToString(person: PersonObject): string {
            return person.username;
        }

        //Override
        public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
            let linear: android.widget.LinearLayout = new android.widget.LinearLayout(utils.ad.getApplicationContext());
            linear.setMinimumWidth(200);
            linear.setMinimumHeight(200);
            linear.setBackgroundColor((new Color("red")).android);
            return linear;
        }
    }
    MentionAdapterClass = MentionAdapter;
}

class PersonObject extends java.lang.Object {
    public username: string;
    constructor(username) {
        super();
        this.username = username;
    }
}