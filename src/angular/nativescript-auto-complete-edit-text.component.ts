import {
    Component, Directive, TemplateRef, ChangeDetectionStrategy, Input, DoCheck, OnDestroy, AfterContentInit, IterableDiffer, ViewContainerRef, ViewChild, EventEmitter, Output, EmbeddedViewRef, ContentChild,
    ɵisListLikeIterable as isListLikeIterable,
    ElementRef,
    IterableDiffers,
    Host

} from "@angular/core";
import { View, KeyedTemplate } from "tns-core-modules/ui/core/view";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { AutoCompleteEditText } from "../index";
import { getSingleViewRecursive } from "nativescript-angular/element-registry";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { profile } from "tns-core-modules/profiling";

const NG_VIEW = "_ngViewRef";

export class ListItemContext {
    constructor(
        public $implicit?: any,
        public item?: any,
        public index?: number,
        public even?: boolean,
        public odd?: boolean
    ) {
    }
}

export interface SetupItemViewArgs {
    view: EmbeddedViewRef<any>;
    data: any;
    index: number;
    context: ListItemContext;
}

@Component({
    selector: "AutoCompleteEditText",
    template: `
        <DetachedContainer>
            <Placeholder #loader></Placeholder>
        </DetachedContainer>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoCompleteEditTextComponent implements DoCheck, OnDestroy, AfterContentInit {

    public get nativeElement(): AutoCompleteEditText {
        return this.autoCompleteEditText;
    }

    private autoCompleteEditText: AutoCompleteEditText;
    private _items: any;
    private _differ: IterableDiffer<KeyedTemplate>;
    private _templateMap: Map<string, KeyedTemplate>;

    @ViewChild("loader", { read: ViewContainerRef }) loader: ViewContainerRef;
    @Output() public setupItemView = new EventEmitter<SetupItemViewArgs>();
    @ContentChild(TemplateRef) itemTemplateQuery: TemplateRef<ListItemContext>;
    itemTemplate: TemplateRef<ListItemContext>;

    @Input()
    get items() {
        return this._items;
    }

    set items(value: any) {
        this._items = value;
        let needDiffer = true;
        if (value instanceof ObservableArray) {
            needDiffer = false;
        }
        if (needDiffer && !this._differ && isListLikeIterable(value)) {
            this._differ = this._iterableDiffers.find(this._items)
                .create((_index, item) => { return item; });
        }
        this.autoCompleteEditText.items = this._items;
    }

    constructor(
        _elementRef: ElementRef,
        private _iterableDiffers: IterableDiffers
    ) {
        this.autoCompleteEditText = _elementRef.nativeElement;
        this.autoCompleteEditText.on("itemLoading", this.onItemLoading, this);
    }

    ngAfterContentInit(): void {
        this.setItemTemplates();
    }
    ngOnDestroy(): void {
        this.autoCompleteEditText.off("itemLoading", this.onItemLoading, this);
    }
    ngDoCheck() {
        if (this._differ) {
            const changes = this._differ.diff(this._items);
            if (changes) {
                this.autoCompleteEditText.refresh();
            }
        }
    }

    private setItemTemplates() {
        // The itemTemplateQuery may be changed after list items are added that contain <template> inside,
        // so cache and use only the original template to avoid errors.
        this.itemTemplate = this.itemTemplateQuery;
        if (this._templateMap) {

            const templates: KeyedTemplate[] = [];
            this._templateMap.forEach(value => {
                templates.push(value);
            });
            this.autoCompleteEditText.itemTemplates = templates;
        }
    }

    public registerTemplate(key: string, template: TemplateRef<ListItemContext>) {
        if (!this._templateMap) {
            this._templateMap = new Map<string, KeyedTemplate>();
        }

        const keyedTemplate = {
            key,
            createView: () => {
                const viewRef = this.loader.createEmbeddedView(template, new ListItemContext(), 0);
                const resultView = getItemViewRoot(viewRef);
                resultView[NG_VIEW] = viewRef;

                return resultView;
            }
        };

        this._templateMap.set(key, keyedTemplate);
    }

    @profile
    public onItemLoading(args: any) {
        if (!args.view && !this.itemTemplate) {
            return;
        }

        const index = args.index;
        const items = (<any>args.object).items;
        const currentItem = typeof items.getItem === "function" ? items.getItem(index) : items[index];
        let viewRef: EmbeddedViewRef<ListItemContext>;

        if (args.view) {
            viewRef = args.view[NG_VIEW];
            // Getting angular view from original element (in cases when ProxyViewContainer
            // is used NativeScript internally wraps it in a StackLayout)
            if (!viewRef && args.view instanceof LayoutBase && args.view.getChildrenCount() > 0) {
                viewRef = args.view.getChildAt(0)[NG_VIEW];
            }

            if (!viewRef) {
            }
        }

        if (!viewRef) {
            viewRef = this.loader.createEmbeddedView(this.itemTemplate, new ListItemContext(), 0);
            args.view = getItemViewRoot(viewRef);
            args.view[NG_VIEW] = viewRef;
        }

        this.setupViewRef(viewRef, currentItem, index);

        this.detectChangesOnChild(viewRef, index);
    }

    public setupViewRef(viewRef: EmbeddedViewRef<ListItemContext>, data: any, index: number): void {
        const context = viewRef.context;
        context.$implicit = data;
        context.item = data;
        context.index = index;
        context.even = (index % 2 === 0);
        context.odd = !context.even;

        this.setupItemView.next({ view: viewRef, data: data, index: index, context: context });
    }

    private detectChangesOnChild(viewRef: EmbeddedViewRef<ListItemContext>, index: number) {
        viewRef.markForCheck();
        viewRef.detectChanges();
    }

}

export interface ComponentView {
    rootNodes: Array<any>;
    destroy(): void;
}

export type RootLocator = (nodes: Array<any>, nestLevel: number) => View;

export function getItemViewRoot(viewRef: ComponentView, rootLocator: RootLocator = getSingleViewRecursive): View {
    const rootView = rootLocator(viewRef.rootNodes, 0);
    return rootView;
}

@Directive({ selector: "[nsTemplateKey]" })
export class TemplateKeyDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        @Host() private autoCompleteEditTextComponent: AutoCompleteEditTextComponent) {
    }

    @Input()
    set nsTemplateKey(value: any) {
        if (this.autoCompleteEditTextComponent && this.templateRef) {
            this.autoCompleteEditTextComponent.registerTemplate(value, this.templateRef);
        }
    }
}