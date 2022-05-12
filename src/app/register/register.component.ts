import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router) {}

  ngOnInit(): void {}

  onRegister(x) {
    console.log('hiii alll')
 
    this.http.post("http://localhost:3000/users",x).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/login'])
    })

  }
}
