import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://localhost:8084/api/v1'

  constructor(private http: HttpClient) { }

  authenticate(credentials : Login) {
    return this.http.post(this.url+"/validateCred",+ credentials);
  }
}
