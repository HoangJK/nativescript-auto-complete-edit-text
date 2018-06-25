import { ElementRef, AfterViewInit } from "@angular/core";
import { BaseValueAccessor } from "nativescript-angular";
import { AutoCompleteEditText } from "../index";
export declare class AutoCompleteEditTextDirective extends BaseValueAccessor<AutoCompleteEditText> implements AfterViewInit {
    elementRef: ElementRef;
    private _normalizedValue;
    private viewInitialized;
    constructor(elementRef: ElementRef);
    textChangedListener(event: any): void;
    onTouched: () => void;
    writeValue(value: any): void;
    ngAfterViewInit(): void;
    registerOnTouched(fn: () => void): void;
}
