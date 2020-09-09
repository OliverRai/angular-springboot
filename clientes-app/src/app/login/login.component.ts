import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string;
  password: string;
  loginError: boolean;

  constructor() { }

  onSubmit(){
    console.log(`user: ${this.username}, Pass: ${this.password}`)
  }
  

}
