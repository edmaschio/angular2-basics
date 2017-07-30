import { Component, Input, EventEmitter, Output } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
    selector: 'app-users',
    template: `
        <p>I'm in the UsersComponent</p>
        <button (click)="extraInfo = true">Show Extra Info!</button>
        <button (click)="onShowAlert()">Show Alert!</button>
        <p *ngIf="extraInfo">Some extra information on UsersComponent</p>
        <p *ngFor="let user of users">{{ user }}<p>
        <p [ngStyle]="{'background-color': color}">This is green</p>
    `
})
export class UsersComponent {
    extraInfo = false;
    color = 'green';
    //@Input() users: any;
    users: any[];
    @Output() alertThrown = new EventEmitter<string>();
    
    constructor(private usersService: UsersService) { 
        this.users = this.usersService.getUsers();
    }

    
    onShowAlert() {
        this.alertThrown.emit('This is my message');
    }
}