import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){
  }

  username: String = 'admin';
  password: any = 'admin';

  login(){
    console.log("inside login")

    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["todo"]);
     }else {
       alert("Invalid credentials");
     }
  }



}
