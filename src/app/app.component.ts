import { Component } from '@angular/core';
import { UsersService } from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Works!';
  age = 27;
  person = {
    name: 'Ederson',
    age: 27,
    genre: 'Male'
  }

  registeredUsers: any[];

  constructor(private usersService: UsersService) { 
    this.registeredUsers = this.usersService.getUsers();
  }

  getName() {
    return 'Ederson';
  }

  setAge(age: number) {
    this.age = age;
  }

  onChildAlert(message: string) {
    alert(message);
  }
}
