import { Directive, forwardRef, ElementRef, AfterViewInit, HostListener } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseValueAccessor } from "nativescript-angular";
import { AutoCompleteEditText } from "../index";

@Directive({
    selector: "AutoCompleteEditText[ngModel], AutoCompleteEditText[formControlName]",
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutoCompleteEditTextDirective),
        multi: true
    }],
})
export class AutoCompleteEditTextDirective extends BaseValueAccessor<AutoCompleteEditText> implements AfterViewInit {

    private _normalizedValue: string;
    private viewInitialized: boolean;

    constructor(
        public elementRef: ElementRef,
    ) {
        super(elementRef.nativeElement);
    }

    @HostListener("textChange", ["$event"])
    public textChangedListener(event: any) {
        this.onChange(event.value);
    }

    public onTouched = () => { };

    public writeValue(value: any): void {
        if (value === undefined || value === null || value === "") {
            this._normalizedValue = null;
        }
        else {
            this._normalizedValue = value;
        }

        if (this.viewInitialized) {
            this.view.text = this._normalizedValue;
        }
    }

    ngAfterViewInit() {
        this.viewInitialized = true;
        this.view.text = this._normalizedValue;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

}