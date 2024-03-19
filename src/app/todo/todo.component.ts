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
  todoTitle='';
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
  if(this.todoTitle==null || this.todoTitle == ''){
  }else{
    let newtask={
      todoTitle:this.todoTitle
    }
    this.todoService.createTask(newtask).subscribe(response => {
      console.log("response :", response)
      this.getTaskList();
    })
  }


 }

 updateTask(task:Task){
  console.log("inside update task")
  if(this.todoTitle==null || this.todoTitle == ''){
  }else{
    let edittask={
      todoId:task.todoId,
      todoTitle:this.todoTitle
    }
    this.todoService.updateTask(edittask).subscribe(res => {
      this.getTaskList()
    })
  }
 }

 deleteTask(id:Task['todoId']){
  this.todoService.deleteTasks(id).subscribe(res => {
    this.getTaskList();
  })
    
 }



}
