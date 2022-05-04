import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  todos: Todo[];
  constructor(private todoservice:TodoService) {
  }
  ngOnInit() {
    this.todoservice.getAllTodos()
      .subscribe((response: Todo[]) => {
        this.todos = response;
      });
  }

  deleteData(id:any){
    this.todoservice.deleteTodos(id).subscribe((deleteResponse)=>{
      console.log(deleteResponse);
      this.ngOnInit();
    })
  }

}

