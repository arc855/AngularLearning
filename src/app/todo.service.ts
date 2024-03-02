import { Injectable } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url='http://localhost:3000/todolist'

  constructor() { }

 
}
