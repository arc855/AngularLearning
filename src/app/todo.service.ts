import { Injectable } from '@angular/core';
import{Task} from './task'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url='http://localhost:8084/api/v1'

  constructor(private http: HttpClient) { }

  createTask(task: Task) {
    return this.http.post(this.url+"/saveTask", task);
  }
  getTaskById(id: number) {
    return this.http.get<Task>(this.url + id);
  }
  updateTask(task: Task) {
    return this.http.put(this.url+"/updateTask/"+ task.todoId, task);
  }
  geAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url+"/getAllTasks");
  }
  deleteTasks(id:any) {
    return this.http.delete<Task[]>(this.url+"/deleteTask/" + id);
  }

 
}
