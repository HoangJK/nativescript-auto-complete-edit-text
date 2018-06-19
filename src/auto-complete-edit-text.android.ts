import {
    Common,
    hashtagColorProperty,
    hashtagColorCssProperty,
    mentionColorProperty,
    mentionColorCssProperty,
    itemsProperty,
    itemTemplatesProperty
} from "./auto-complete-edit-text.common";
import { View, Property, KeyedTemplate, Template } from "tns-core-modules/ui/core/view";
import * as utils from "tns-core-modules/utils/utils";
import app = require("tns-core-modules/application");
import { Color } from "tns-core-modules/color";
import { Label } from "tns-core-modules/ui/label";
import { ProxyViewContainer } from "tns-core-modules/ui/proxy-view-container";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Observable } from "tns-core-modules/data/observable";

global.moduleMerge(Common, exports);
export declare namespace com {
    module hendraanggrian {
        module widget {
            class SocialAutoCompleteTextView {
                constructor(context);
                getAdapter();
                setAdapter(adapter: any);
            }
            class SocialView {

            }
            class SocialAdapter {
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
    nativeViewProtected: com.hendraanggrian.widget.SocialAutoCompleteTextView;
    public _realizedItems = new Map<android.view.View, View>();
    public _realizedTemplates = new Map<string, Map<android.view.View, View>>();
    public _mentionAdapter: any;

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
                that.get().refresh();
                return null;
            }
        }));
        //Set mention adapter for auto complete
        ensureMentionAdapterClass();
        let mentionAdapter = new MentionAdapterClass(this);
        (<any>socialAutoCompleteTextView).setMentionAdapter(mentionAdapter);
        (<any>socialAutoCompleteTextView).listener = listener;
        return socialAutoCompleteTextView;
    }

    //Override
    private _configureEditText(socialAutoCompleteTextView: any) {
        socialAutoCompleteTextView.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_NORMAL | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES | android.text.InputType.TYPE_TEXT_FLAG_MULTI_LINE | android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
        socialAutoCompleteTextView.setGravity(android.view.Gravity.TOP | android.view.Gravity.START);
    }

    public refresh() {
        const nativeView = this.nativeViewProtected;
        if (!nativeView || !nativeView.getAdapter()) {
            return;
        }

        // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
        this._realizedItems.forEach((view, nativeView) => {
            if (!(view.bindingContext instanceof Observable)) {
                view.bindingContext = null;
            }
        });
        console.log("---refresh---");
        (<android.widget.ArrayAdapter<any>>nativeView.getAdapter()).notifyDataSetChanged();
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

    [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
        return null;
    }
    [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
        this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
        if (value) {
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }
        this.nativeViewProtected.setAdapter(new MentionAdapterClass(this));
        this.refresh();
    }
}

let MentionAdapterClass;
function ensureMentionAdapterClass() {
    if (MentionAdapterClass) {
        return;
    }
    class MentionAdapter extends android.widget.ArrayAdapter<any> {
        constructor(public owner: AutoCompleteEditText) {
            super(utils.ad.getApplicationContext(), 0, 0);
            return global.__native(this);
        }

        //Override
        public getCount(): number {
            return this.owner && this.owner.items && this.owner.items.length ? this.owner.items.length : 0;
        }

        //Override
        public getItem(index: number) {
            if (this.owner && this.owner.items && index < this.owner.items.length) {
                let getItem = (<any>this.owner.items).getItem;
                return getItem ? getItem.call(this.owner.items, index) : this.owner.items[index];
            }
            return null;
        }

        //Override
        public getItemId(i: number) {
            let item = this.getItem(i);
            let id = i;
            if (this.owner && item && this.owner.items) {
                id = this.owner.itemIdGenerator(item, i, this.owner.items);
            }
            return long(id);
        }

        public getViewTypeCount() {
            return this.owner._itemTemplatesInternal.length;
        }

        public getItemViewType(index: number) {
            let template = this.owner._getItemTemplate(index);
            let itemViewType = this.owner._itemTemplatesInternal.indexOf(template);
            return itemViewType;
        }

        //Override
        public getView(index: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
            if (!this.owner) {
                return null;
            }
            let template = this.owner._getItemTemplate(index);
            let view: View;
            if (convertView) {
                view = this.owner._realizedTemplates.get(template.key).get(convertView);
                if (!view) {
                    throw new Error(`There is no entry with key '${convertView}' in the realized views cache for template with key'${template.key}'.`);
                }
            }
            else {
                view = template.createView();
            }
            if (!view) {
                view = this.owner._getDefaultItemContent(index);
            }
            this.owner._prepareItem(view, index);
            if (!view.parent) {
                // Proxy containers should not get treated as layouts.
                // Wrap them in a real layout as well.
                if (view instanceof LayoutBase &&
                    !(view instanceof ProxyViewContainer)) {
                    this.owner._addView(view);
                    convertView = view.nativeViewProtected;
                } else {
                    let sp = new StackLayout();
                    sp.addChild(view);
                    this.owner._addView(sp);

                    convertView = sp.nativeViewProtected;
                }
            }
            let realizedItemsForTemplateKey = this.owner._realizedTemplates.get(template.key);
            if (!realizedItemsForTemplateKey) {
                realizedItemsForTemplateKey = new Map<android.view.View, View>();
                this.owner._realizedTemplates.set(template.key, realizedItemsForTemplateKey);
            }
            realizedItemsForTemplateKey.set(convertView, view);
            this.owner._realizedItems.set(convertView, view);
            return convertView;
        }
    }
    MentionAdapterClass = MentionAdapter;
}