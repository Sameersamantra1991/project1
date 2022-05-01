import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './center/todo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient:HttpClient) {

   }
   getAllTodos(): Observable<Todo[]> {
    return this.httpclient.get<Todo[]>('http://localhost:3000/posts')
  }
}
