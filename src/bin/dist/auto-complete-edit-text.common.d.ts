import { ChangedData } from 'tns-core-modules/data/observable-array';
import { View, Property, KeyedTemplate, Template } from "tns-core-modules/ui/core/view";
import { TextView } from "tns-core-modules/ui/text-view";
import { Style, CssProperty } from "tns-core-modules/ui/text-base";
import { Color } from "tns-core-modules/color";
export declare module knownTemplates {
    const itemTemplate = "itemTemplate";
}
export declare module knownMultiTemplates {
    const itemTemplates = "itemTemplates";
}
export declare class Common extends TextView {
    static mentionTextChangedEvent: string;
    private _itemIdGenerator;
    private _itemTemplateSelector;
    private _itemTemplateSelectorBindable;
    _defaultTemplate: KeyedTemplate;
    _itemTemplatesInternal: KeyedTemplate[];
    items: any[];
    itemTemplate: any;
    itemTemplates: string | Array<KeyedTemplate>;
    mentionKeyword: string;
    refresh(): void;
    itemTemplateSelector: string | ((item: any, index: number, items: any) => string);
    itemIdGenerator: (item: any, index: number, items: any) => number;
    _getItemTemplate(index: number): KeyedTemplate;
    private _getDataItem(index);
    _prepareItem(item: View, index: number): void;
    _getDefaultItemContent(index: number): View;
    _onItemsChanged(args: ChangedData<any>): void;
}
export declare const hashtagColorProperty: Property<Common, Color>;
export declare const hashtagColorCssProperty: CssProperty<Style, Color>;
export declare const mentionColorProperty: Property<Common, Color>;
export declare const mentionColorCssProperty: CssProperty<Style, Color>;
export declare const itemsProperty: Property<Common, any[]>;
export declare const itemTemplateProperty: Property<Common, string | Template>;
export declare const itemTemplatesProperty: Property<Common, string | KeyedTemplate[]>;
export declare const mentionKeywordProperty: Property<Common, string>;
