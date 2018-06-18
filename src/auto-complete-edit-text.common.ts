import { Observable } from 'tns-core-modules/data/observable';
import { View, Property } from "tns-core-modules/ui/core/view";
import { TextView } from "tns-core-modules/ui/text-view";
import { Style, CssProperty } from "tns-core-modules/ui/text-base";
import { Color } from "tns-core-modules/color";

export class Common extends TextView {
    public items: any[];

    public static mentionTextChangedEvent = "mentionTextChanged";
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

export const itemsProperty = new Property<Common, Array<any>>({
    name: "items",
    valueChanged: (v) => v
});
itemsProperty.register(Common);