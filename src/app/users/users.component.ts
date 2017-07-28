import { Component } from "@angular/core";

@Component({
    selector: 'app-users',
    template: `
        <p>I'm in the UsersComponent</p>
        <button (click)="extraInfo = true">Show Extra Info!</button>
        <p *ngIf="extraInfo">Some extra information on UsersComponent</p>
        <p *ngFor="let user of users">{{ user }}<p>
        <p [ngStyle]="{'background-color': color}">This is green</p>
    `
})
export class UsersComponent {
    extraInfo = false;
    color = 'green';
    users = ['Ederson', 'Juliana', 'Wagner'];
}