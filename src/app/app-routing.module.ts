import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
  { path: '', component: LoginComponent },

  
  // {
  //   path: 'todo',
  //   loadComponent:()=> import('./todo/todo.component').then((com)=> com.TodoComponent)
  // },
  // {
  //   path: 'login',
  //   loadComponent:()=> import('./login/login.component').then((com)=> com.LoginComponent)
  // },
  // {
  //   path: '',
  //   loadComponent:()=> import('./login/login.component').then((com)=> com.LoginComponent)
  // },
  // {
  //   path: '**',
  //   loadComponent:()=> import('./login/login.component').then((com)=> com.LoginComponent)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }