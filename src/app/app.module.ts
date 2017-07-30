import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from "./users.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
