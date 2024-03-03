import { Injectable } from '@angular/core';
import{Task} from './task'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url='http://localhost:3000/todolist/'

  constructor(private http: HttpClient) { }

  createTask(task: Task) {
    return this.http.post(this.url, task);
  }
  getTaskById(id: number) {
    return this.http.get<Task>(this.url  + id);
  }
  updateTask(task: Task) {
    return this.http.patch(this.url  + task.id, task);
  }
  geAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
  deleteTasks(id:any) {
    return this.http.delete<Task[]>(this.url + id);
  }

 
}
