import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { AutoCompleteEditTextDirective } from "./nativescript-auto-complete-edit-text.directives";
import { FormsModule } from "@angular/forms";
import { AutoCompleteEditTextComponent, TemplateKeyDirective } from "./nativescript-auto-complete-edit-text.component";

registerElement("AutoCompleteEditText", () => require("../").AutoCompleteEditText);

@NgModule({
    declarations: [AutoCompleteEditTextDirective, AutoCompleteEditTextComponent, TemplateKeyDirective],
    imports: [FormsModule],
    exports: [FormsModule, AutoCompleteEditTextDirective, AutoCompleteEditTextComponent, TemplateKeyDirective]
})
export class NativeScriptUIAutoCompleteEditTextModule {

}