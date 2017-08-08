// ANGULAR MODULES
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router } from "@angular/router";
import { NgModule } from '@angular/core';


// MODULES
import { ViewModule } from "./view/view.module";
import { ContactModule } from "./contact/contact.module";

// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from "./main/main.component";
import { InfosComponent } from "./infos/infos.component";

// ROUTES
import { routing } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfosComponent    
  ],
  imports: [
    routing,
    BrowserModule,
    HttpModule,
    ContactModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
