import { NgModule } from "@angular/core";

import { ContactComponent } from "./contact.component";

import { NameFilterPipe } from "./contact.pipe";

@NgModule({
    declarations: [ContactComponent, NameFilterPipe],
    exports: [ContactComponent, NameFilterPipe]
})

export class ContactModule {}