import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth : LoginService){}

  async handleAuth(){
    const response = await this.auth.signInWithGitHub()
    console.log("response :",response)
  }


}
