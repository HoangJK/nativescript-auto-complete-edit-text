import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public contentMessage = "JK";
    public mentionItems = [
        {
            username: "jk",
            displayName: "Hoang Le",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user1",
            displayName: "User 1",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user2",
            displayName: "User 2",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user3",
            displayName: "User 3",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user1",
            displayName: "User 1",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user2",
            displayName: "User 2",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user3",
            displayName: "User 3",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user1",
            displayName: "User 1",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user2",
            displayName: "User 2",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user3",
            displayName: "User 3",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user1",
            displayName: "User 1",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user2",
            displayName: "User 2",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user3",
            displayName: "User 3",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user1",
            displayName: "User 1",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user2",
            displayName: "User 2",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user3",
            displayName: "User 3",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user1",
            displayName: "User 1",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user2",
            displayName: "User 2",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
        {
            username: "user3",
            displayName: "User 3",
            avatar: "https://www.thefamouspeople.com/profiles/images/zhao-liying-1.jpg"
        },
    ];

    ngOnInit() {
        var self = this;

    }

    onMentionTextChanged(args) {
        console.log(args);
    }

}
