import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {}

  ngOnInit(): void {}

  onLogin(x){
    console.log(this.loginForm.getRawValue());
    this.http.post('http://localhost:3000/login',x,{withCredentials: true}).subscribe((logindata)=>{
      console.log("hiiii" + logindata);
      this.router.navigate(['/']);
    
    })
    console.log('login works')

  }
}
