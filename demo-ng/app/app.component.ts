import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public contentMessage = "JK"

    ngOnInit() {
        var self = this;

    }

    onShowTextClick() {
        console.log("onShowTextClick: ", this.contentMessage);
    }

    onTextChanged(args) {
        console.log("onTextChanged: ", args.object.text);
    }
}
