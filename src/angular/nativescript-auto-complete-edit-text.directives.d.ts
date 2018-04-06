import { ElementRef, OnInit } from "@angular/core";
import { CustomNgModel } from "./custom-ng-model";
export declare class AutoCompleteEditTextDirective extends CustomNgModel implements OnInit {
    element: ElementRef;
    ngModel: string;
    constructor(element: ElementRef);
    ngOnInit(): void;
}
export declare const DIRECTIVES: typeof AutoCompleteEditTextDirective[];
