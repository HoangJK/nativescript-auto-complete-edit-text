import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { DIRECTIVES } from "./nativescript-auto-complete-edit-text.directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES]
})
export class NativeScriptUIAutoCompleteEditTextModule {

}

registerElement("AutoCompleteEditText", () => require("../").AutoCompleteEditText)