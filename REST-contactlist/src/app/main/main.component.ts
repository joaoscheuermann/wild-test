import { Component } from "@angular/core";

import { RESTService } from "../REST/rest.service";

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [RESTService]
})

export class MainComponent {

    private contacts = []

    constructor(private REST: RESTService) {
        this.REST.getContacts().subscribe(data => this.contacts = data, err => {
            console.log(err)
        });
    }

    click(ev: Event) {
        ev.preventDefault();        

        // this.REST.addContact({
        //     Name: 'lala',
        //     Telephone: 112233333333,
        //     Adress: 'cada do kraio',
        //     Email: '@meu pau de oculos',
        //     BirthDate: 'lalala'
        // })
        //     .subscribe(data => this.contacts = this.contacts.concat(data), err => {
        //         console.log(err);                
        //     });
    }

}