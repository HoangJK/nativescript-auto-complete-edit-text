import { ControlValueAccessor } from '@angular/forms';
export declare class CustomNgModel implements ControlValueAccessor {
    private _value;
    private onTouchedCallback;
    private onChangeCallback;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setFirstTimeBinding(action: Function): void;
    constructor();
}
