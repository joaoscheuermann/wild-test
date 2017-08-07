import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    @Input() Name: string;
    @Input() avatar: string;
    @Input() _id: string;

    constructor (private router: Router) {
        // console.log(this.router)
    }

    click(ev: Event) {
        ev.preventDefault();   
        this.router.navigate(['./infos', this._id]);     
    }
}