
import { TodoService } from '../todo.service'


import { Component, OnInit } from '@angular/core';



import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Todo } from '../center/todo';

@Component({
  selector: 'app-add-ang-date',
  templateUrl: './add-ang-date.component.html',
  styleUrls: ['./add-ang-date.component.css'],
})
export class AddAngDateComponent implements OnInit {
  todos: Todo[];
  profileForm = this.fb.group({
    title: ['', Validators.required],
    releaseDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private todoservice:TodoService) {}

  ngOnInit(){
    this.todoservice.getAllTodos().subscribe((response: Todo[]) => {
      this.todos = response;
    });
  }

  get registerFormControl() {
    return this.profileForm.controls;
  }

  onSubmit(x: any) {
    console.warn(this.profileForm.value );
    console.log(x);

    this.todoservice.postTodos(x).subscribe(()=>{
      console.log("it is done successfully")
      this.ngOnInit()
    })
  }
}
