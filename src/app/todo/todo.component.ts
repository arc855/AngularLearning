import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TodoService} from'../todo.service';
import { Task } from '../task';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
 task='';
 todos: Task[] = [];

 constructor(private todoService : TodoService){

 }

 ngOnInit(): void {
   this.getTaskList();
 }

 getTaskList(){
  this.todoService.geAllTasks().subscribe(response => {
    this.todos = response;
  })
 }

 addNewTask(){
  if(this.task==null || this.task == ''){
  }else{
    let newtask={
      task:this.task
    }
    this.todoService.createTask(newtask).subscribe(response => {
      console.log("response :", response)
      this.getTaskList();
    })
  }


 }

 updateTask(task:Task){
  if(this.task==null || this.task == ''){
  }else{
    let edittask={
      id:task.id,
      task:this.task
    }
    this.todoService.updateTask(edittask).subscribe(res => {
      this.getTaskList()
    })
  }
 }

 deleteTask(id:Task['id']){
  this.todoService.deleteTasks(id).subscribe(res => {
    this.getTaskList();
  })
    
 }



}
