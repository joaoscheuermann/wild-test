import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RESTService } from "../REST/rest.service";
import { Contact } from "../contact/contact.interface";

@Component({
    moduleId: module.id,
    selector: 'infos',
    templateUrl: './infos.component.html',
    styleUrls: [ './infos.component.css' ],
    providers: [RESTService]
})

export class InfosComponent {

    private id: string = '';
    private infos;

    constructor(private route: ActivatedRoute, private REST: RESTService) {
        this.id = this.route.snapshot.params['id'];
        this.REST.getContacts().subscribe(data => {
           this.infos = data.filter((contact) => contact._id === this.id)[0]           
        }, err => {
            console.log(err)
        });
        
    }
}