import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TodoService} from'../services/todo.service';
import { Task } from '../model/task';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todoTitle='atyoupui';
 todos: Task[] = [];
 task: Task ={
  todoId: '',
  todoTitle: ''
 }
 username :string ='';

 constructor(private todoService : TodoService , private auth:LoginService, private router: Router){
  this.auth.currentUser.subscribe((user)=>{
    console.log("Logined user data",user?.user_metadata['name'])
  })

 }

 signOut(){
  this.auth.signOut()
  this.router.navigate(['/login'])
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
  console.log("inside update task" ,this.task.todoTitle)
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


