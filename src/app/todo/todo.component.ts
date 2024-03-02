import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  public newTask :any;
  AllTasks:any=[]
  addTask(){
    if(this.newTask == null){
    }
    else{
      this.AllTasks.push(this.newTask)

    }
  }

  updateTask(index:any){
    if(this.newTask == ''){

    }
    this.AllTasks[index]=this.newTask;

  }

  deleteTask(index:any){
    this.AllTasks.splice(index,1)

  }
  


}
