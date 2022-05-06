
import { TodoService } from '../todo.service'


import { Component, OnInit } from '@angular/core';



import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ang-date',
  templateUrl: './add-ang-date.component.html',
  styleUrls: ['./add-ang-date.component.css'],
})
export class AddAngDateComponent implements OnInit {
  todos:any;
  profileForm = this.fb.group({
    title: ['', Validators.required],
    releaseDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private todoservice:TodoService) {}

  ngOnInit(){
    this.todoservice.getAllTodos()
      .subscribe((response) => {
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
      this.ngOnInit();
    })
  }
  deleteData(id:any){
    this.todoservice.deleteTodos(id).subscribe((deleteResponse)=>{
      console.log(deleteResponse);
      this.ngOnInit();
    })
  }

  updatefun(id: any){

    console.log(id);
    this.todoservice.getuserbyId(id).subscribe((data)=>{
      console.log(data);
      this.ngOnInit();
     
    })


  }
}
