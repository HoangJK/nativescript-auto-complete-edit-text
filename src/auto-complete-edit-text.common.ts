import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray, ChangedData } from 'tns-core-modules/data/observable-array';
import { View, Property, KeyedTemplate, Template } from "tns-core-modules/ui/core/view";
import { TextView } from "tns-core-modules/ui/text-view";
import { Label } from "tns-core-modules/ui/label";
import { parse, parseMultipleTemplates } from "tns-core-modules/ui/builder";
import { Style, CssProperty } from "tns-core-modules/ui/text-base";
import { addWeakEventListener, removeWeakEventListener } from "tns-core-modules/ui/core/weak-event-listener";
import { Color } from "tns-core-modules/color";

export module knownTemplates {
    export const itemTemplate = "itemTemplate";
}

export module knownMultiTemplates {
    export const itemTemplates = "itemTemplates";
}

export class Common extends TextView {
    public static mentionTextChangedEvent = "mentionTextChanged";
    private _itemIdGenerator: (item: any, index: number, items: any) => number = (_item: any, index: number) => index;
    private _itemTemplateSelector: (item: any, index: number, items: any) => string;
    private _itemTemplateSelectorBindable = new Label();
    public _defaultTemplate: KeyedTemplate = {
        key: "default",
        createView: () => {
            if (this.itemTemplate) {
                return parse(this.itemTemplate, this);
            }
            return undefined;
        }
    }
    public _itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
    public items: any[];
    public itemTemplate: any;
    public itemTemplates: string | Array<KeyedTemplate>;
    public mentionKeyword: string;

    public refresh() {
        //
    }

    get itemTemplateSelector(): string | ((item: any, index: number, items: any) => string) {
        return this._itemTemplateSelector;
    }
    set itemTemplateSelector(value: string | ((item: any, index: number, items: any) => string)) {
        if (typeof value === "string") {
            this._itemTemplateSelectorBindable.bind({
                sourceProperty: null,
                targetProperty: "templateKey",
                expression: value
            });
            this._itemTemplateSelector = (item: any, index: number, items: any) => {
                item["$index"] = index;
                this._itemTemplateSelectorBindable.bindingContext = item;
                return this._itemTemplateSelectorBindable.get("templateKey");
            };
        }
        else if (typeof value === "function") {
            this._itemTemplateSelector = value;
        }
    }

    get itemIdGenerator(): (item: any, index: number, items: any) => number {
        return this._itemIdGenerator;
    }
    set itemIdGenerator(generatorFn: (item: any, index: number, items: any) => number) {
        this._itemIdGenerator = generatorFn;
    }

    public _getItemTemplate(index: number): KeyedTemplate {
        let templateKey = "default";
        if (this.itemTemplateSelector) {
            let dataItem = this._getDataItem(index);
            templateKey = this._itemTemplateSelector(dataItem, index, this.items);
        }

        for (let i = 0, length = this._itemTemplatesInternal.length; i < length; i++) {
            if (this._itemTemplatesInternal[i].key === templateKey) {
                return this._itemTemplatesInternal[i];
            }
        }

        // This is the default template
        return this._itemTemplatesInternal[0];
    }

    private _getDataItem(index: number): any {
        let thisItems = <any>this.items;
        return thisItems.getItem ? thisItems.getItem(index) : thisItems[index];
    }

    public _prepareItem(item: View, index: number) {
        if (item) {
            item.bindingContext = this._getDataItem(index);
        }
    }

    public _getDefaultItemContent(index: number): View {
        let lbl = new Label();
        lbl.bind({
            targetProperty: "text",
            sourceProperty: "$value"
        });
        return lbl;
    }

    public _onItemsChanged(args: ChangedData<any>) {
        this.refresh();
    }

}


export const hashtagColorProperty = new Property<Common, Color>({
    name: "hashtagColor",
    valueConverter: (v) => new Color(v)
});
hashtagColorProperty.register(Common);

export const hashtagColorCssProperty = new CssProperty<Style, Color>({
    name: "hashtagColor",
    cssName: "hashtag-color",
    valueConverter: (v) => new Color(v)
});
hashtagColorCssProperty.register(Style);

export const mentionColorProperty = new Property<Common, Color>({
    name: "mentionColor",
    valueConverter: v => new Color(v)
});
mentionColorProperty.register(Common);

export const mentionColorCssProperty = new CssProperty<Style, Color>({
    name: "mentionColor",
    cssName: "mention-color",
    valueConverter: (v) => new Color(v)
});
mentionColorCssProperty.register(Style);

export const itemsProperty = new Property<Common, any[]>({
    name: "items", valueChanged: (target, oldValue, newValue) => {
        if (oldValue instanceof Observable) {
            removeWeakEventListener(oldValue, ObservableArray.changeEvent, target._onItemsChanged, target);
        }

        if (newValue instanceof Observable) {
            addWeakEventListener(newValue, ObservableArray.changeEvent, target._onItemsChanged, target);
        }

        target.refresh();
    }
});
itemsProperty.register(Common);

export const itemTemplateProperty = new Property<Common, string | Template>({
    name: "itemTemplate", valueChanged: (target) => {
        console.log("-------------itemTemplateProperty")
        target.refresh();
    }
});
itemTemplateProperty.register(Common);

export const itemTemplatesProperty = new Property<Common, string | Array<KeyedTemplate>>({
    name: "itemTemplates", valueConverter: (value) => {
        if (typeof value === "string") {
            return parseMultipleTemplates(value);
        }

        return value;
    }
})
itemTemplatesProperty.register(Common);


export const mentionKeywordProperty = new Property<Common, string>({
    name: "mentionKeyword", valueConverter: (value) => value
});
mentionKeywordProperty.register(Common);