import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ObservableArray } from "data/observable-array";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public contentMessage = "JK";
    public mentionItems: ObservableArray<any> = new ObservableArray([]);

    constructor(
        private http: HttpClient
    ) {

    }

    ngOnInit() {
        var self = this;

    }

    onMentionTextChanged(args) {
        if (!args.text) {
            this.mentionItems = new ObservableArray([]);
            return;
        }
        let self = this;
        // this.getMockData().subscribe(
        //     (result: Array<any>) => {
        //         self.getResponseInfo(result);
        //     },
        //     (error) => {
        //         console.log(error);
        //     });
    }

    getMockData() {
        let serverUrl = "https://jsonplaceholder.typicode.com/users";
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        let data = [];
        return this.http.get(serverUrl, { headers: headers });
    }

    getResponseInfo(result: Array<any>) {
        this.mentionItems = new ObservableArray([]);
        result.forEach((item) => {
            this.mentionItems.push({
                username: item.username,
                displayName: item.name,
                avatar: ""
            });
        });
    }

    btnChangeData(event) {
        this.mentionItems = new ObservableArray([
            {
                username: "jk",
                displayName: "Hoang Le",
                avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
            },
            {
                username: "user1",
                displayName: "User 1",
            },
            {
                username: "user2",
                displayName: "User 2",
            },
        ]);
    }

}
