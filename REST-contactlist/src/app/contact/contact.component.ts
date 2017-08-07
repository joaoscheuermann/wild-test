import { Component, Input } from "@angular/core";

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

    click(ev: Event) {
        ev.preventDefault();        
    }
}