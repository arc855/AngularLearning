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


}
