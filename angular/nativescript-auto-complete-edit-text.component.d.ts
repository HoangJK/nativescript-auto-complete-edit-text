import { TemplateRef, DoCheck, OnDestroy, AfterContentInit, ViewContainerRef, EventEmitter, EmbeddedViewRef, ElementRef, IterableDiffers } from "@angular/core";
import { View } from "tns-core-modules/ui/core/view";
import { AutoCompleteEditText } from "../index";
export declare class ListItemContext {
    $implicit: any;
    item: any;
    index: number;
    even: boolean;
    odd: boolean;
    constructor($implicit?: any, item?: any, index?: number, even?: boolean, odd?: boolean);
}
export interface SetupItemViewArgs {
    view: EmbeddedViewRef<any>;
    data: any;
    index: number;
    context: ListItemContext;
}
export declare class AutoCompleteEditTextComponent implements DoCheck, OnDestroy, AfterContentInit {
    private _iterableDiffers;
    readonly nativeElement: AutoCompleteEditText;
    private autoCompleteEditText;
    private _items;
    private _differ;
    private _templateMap;
    loader: ViewContainerRef;
    setupItemView: EventEmitter<SetupItemViewArgs>;
    itemTemplateQuery: TemplateRef<ListItemContext>;
    itemTemplate: TemplateRef<ListItemContext>;
    items: any;
    constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    private setItemTemplates();
    registerTemplate(key: string, template: TemplateRef<ListItemContext>): void;
    onItemLoading(args: any): void;
    setupViewRef(viewRef: EmbeddedViewRef<ListItemContext>, data: any, index: number): void;
    private detectChangesOnChild(viewRef, index);
}
export interface ComponentView {
    rootNodes: Array<any>;
    destroy(): void;
}
export declare type RootLocator = (nodes: Array<any>, nestLevel: number) => View;
export declare function getItemViewRoot(viewRef: ComponentView, rootLocator?: RootLocator): View;
export declare class TemplateKeyDirective {
    private templateRef;
    private autoCompleteEditTextComponent;
    constructor(templateRef: TemplateRef<any>, autoCompleteEditTextComponent: AutoCompleteEditTextComponent);
    nsTemplateKey: any;
}
