// ANGULAR MODULES
import { BrowserModule } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { NgModule } from '@angular/core';


// MODULES
import { ViewModule } from "./view/view.module";
import { ContactModule } from "./contact/contact.module";

// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from "./main/main.component";

// ROUTES
import { routing } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent    
  ],
  imports: [
    routing,
    BrowserModule,
    ContactModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
