import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent {

    contacts = [
        {
            Name: "Joao Vitor",
            Telephone: 5511986266799,
            Adress: "mooca",
            Email: "jvitor.sche@gmail.com",
            BirthDate: 26101996,
            _id: "123456"
        },
        {
            Name: "TESTE",
            Telephone: 1122333333333,
            Adress: "mooca",
            Email: "jvitor.sche@gmail.com",
            BirthDate: 26101996,
            _id: "45678978978"
        }
    ]

    constructor() { }
}