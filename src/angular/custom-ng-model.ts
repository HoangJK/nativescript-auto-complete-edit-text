import { forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
    // noop
};

export class CustomNgModel implements ControlValueAccessor {
    private _value: any;
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    get value(): any {
        return this._value;
    }
    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCallback(v);
        }
    }
    writeValue(value: any) {
        if (value !== this._value) {
            this._value = value;
        }
    }
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    setFirstTimeBinding(action: Function) {
        if (action) {
            setTimeout(() => {
                action();
            }, 100);
        }
    }

    constructor(
    ) {
    }
}
