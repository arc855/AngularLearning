import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { SupabaseClient,User, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private supabase! : SupabaseClient
  user = new BehaviorSubject<User | null>(null)

  constructor(private router: Router) {
    this.supabase = createClient(environment.supbase.url,environment.supbase.key);
    this.supabase.auth.onAuthStateChange((event,sesion)=>{
      console.log(event)
      console.log(sesion)

      if(event == 'SIGNED_IN' || event == 'TOKEN_REFRESHED'){
        this.user.next(sesion!.user)
        this.router.navigate(['/todo'])

      }else{
        this.user.next(null)

      }
    })
   }

   async signInWithGitHub(){
      await this.supabase.auth.signInWithOAuth({
        provider: 'github'
      })
   }

   async signOut(){
    await this.supabase.auth.signOut()
   }

   get currentUser(){
    return this.user.asObservable();
   }




}
