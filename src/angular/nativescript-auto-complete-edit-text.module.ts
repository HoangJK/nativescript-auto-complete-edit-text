import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { AutoCompleteEditTextDirective } from "./nativescript-auto-complete-edit-text.directives";
import { FormsModule } from "@angular/forms";
import { AutoCompleteEditTextComponent, TemplateKeyDirective } from "./nativescript-auto-complete-edit-text.component";

registerElement("AutoCompleteEditText", () => require("../").AutoCompleteEditText);

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [AutoCompleteEditTextDirective, AutoCompleteEditTextComponent, TemplateKeyDirective],
    imports: [],
    exports: [FormsModule, AutoCompleteEditTextDirective, AutoCompleteEditTextComponent, TemplateKeyDirective]
})
export class NativeScriptUIAutoCompleteEditTextModule {

}