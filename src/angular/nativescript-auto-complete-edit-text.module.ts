import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { AutoCompleteEditTextDirective } from "./nativescript-auto-complete-edit-text.directives";
import { FormsModule } from "@angular/forms";

registerElement("AutoCompleteEditText", () => require("../").AutoCompleteEditText);

@NgModule({
    declarations: [AutoCompleteEditTextDirective],
    imports: [FormsModule],
    exports: [FormsModule, AutoCompleteEditTextDirective]
})
export class NativeScriptUIAutoCompleteEditTextModule {

}