import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../todo.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  todos: Todo[];
  constructor(private todoservice: TodoService, private fb: FormBuilder) {}

  profileForm = this.fb.group({
    title: ['', Validators.required],
    releaseDate: ['', Validators.required],
  });
  ngOnInit() {
    this.todoservice.getAllTodos().subscribe((response: Todo[]) => {
      this.todos = response;
    });
  }

  get registerFormControl() {
    return this.profileForm.controls;
  }

  deleteData(id: any) {
    this.todoservice.deleteTodos(id).subscribe((deleteResponse) => {
      console.log(deleteResponse);
      this.ngOnInit();
    });
  }

  updatefun(id: any) {
    console.log(id);
    this.todoservice.getuserbyId(id).subscribe((data: any) => {
      console.log(data);
      this.profileForm.controls['title'].setValue(data.title);
      this.profileForm.controls['releaseDate'].setValue(data.releaseDate);
    });
  }

  onEdit(data: any) {
    console.log(data);
    console.log("on edit method is called");
    this.todoservice.updateUserbyId(data).subscribe((data)=>{

      console.log(data);

    })
   
    this.profileForm.reset();
    document.getElementById("clo").click();
    this.ngOnInit();
  }
}
