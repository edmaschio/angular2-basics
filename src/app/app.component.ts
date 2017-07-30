import { Component } from '@angular/core';

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
  registeredUsers = ['Ederson', 'Juliana', 'Wagner'];

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
