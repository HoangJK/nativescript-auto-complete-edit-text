import { Directive, Input, forwardRef, ElementRef, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { CustomNgModel } from "./custom-ng-model";

const noop = () => {
    // noop
};

@Directive({
    selector: "AutoCompleteEditText",
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutoCompleteEditTextDirective),
        multi: true
    }],
})
export class AutoCompleteEditTextDirective extends CustomNgModel implements OnInit {
    @Input() ngModel: string;

    constructor(
        public element: ElementRef
    ) {
        super();
    }

    ngOnInit() {
        var self = this;
        this.element.nativeElement.text = this.ngModel;
        this.element.nativeElement.on("textChange", function (args) {
            self.value = self.element.nativeElement.text;
        });
    }

}
export const DIRECTIVES = [AutoCompleteEditTextDirective];