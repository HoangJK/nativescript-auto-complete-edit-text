import { ElementRef } from "@angular/core";
import { CustomNgModel } from "./custom-ng-model";
export declare class AutoCompleteEditTextDirective extends CustomNgModel {
    element: ElementRef;
    ngModel: any;
    constructor(element: ElementRef);
    ngOnInit(): void;
}
export declare const DIRECTIVES: typeof AutoCompleteEditTextDirective[];
