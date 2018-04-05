import { Directive, Input, forwardRef, ElementRef } from "@angular/core";
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
export class AutoCompleteEditTextDirective extends CustomNgModel {
    @Input() ngModel: any;

    constructor(
        public element: ElementRef
    ) {
        super();
    }

    ngOnInit() {
        var self = this;
        this.element.nativeElement.text = this.ngModel;
        this.element.nativeElement.on("textChanged", function (args) {
            console.log("textChanged: ", self.element.nativeElement.text);
            self.value = self.element.nativeElement.text;
        });
    }

}
export const DIRECTIVES = [AutoCompleteEditTextDirective];