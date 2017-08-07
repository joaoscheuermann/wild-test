import { Pipe, PipeTransform } from "@angular/core";
import { ContactComponent } from "./contact.component";

@Pipe({
    name: 'NameFilterPipe'
})

export class NameFilterPipe implements PipeTransform {
    transform(contacts: ContactComponent[], typed: string = "") {
        return contacts.filter(contact => contact.Name.toLowerCase().includes(typed.toLowerCase()))
    }
}