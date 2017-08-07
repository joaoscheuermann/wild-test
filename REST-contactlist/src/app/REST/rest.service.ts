import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contact } from "../contact/contact.interface";
import 'rxjs/add/operator/map';

@Injectable()

export class RESTService {

    private url: string = `http://localhost:3000/contacts`;

    constructor(private http: Http) { }

    getContacts() {
        return this.http.get(this.url).map((res: Response) => res.json());
    }

    addContact(json: Contact) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, json, options).map((res: Response) => res.json());
    }

}

