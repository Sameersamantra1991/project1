import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  
  constructor(private todoservice:TodoService) {
  }
  ngOnInit() {
    
  }

  


  // updatefun(id: any){

  //   console.log(id);
  //   this.todoservice.getuserbyId(id).subscribe((data)=>{
  //     console.log(data);
     
  //   })


  // }

}

