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
   getAllTodos(): Observable<any> {
    return this.httpclient.get<Todo[]>('http://localhost:3000/posts')
  }
  deleteTodos(id):Observable<any>{
    return this.httpclient.delete('http://localhost:3000/posts/'+ id);
  }
  postTodos(obj: any):Observable<any>{
    return this.httpclient.post('http://localhost:3000/posts/',obj);
  }
  getuserbyId(id: any){
    return this.httpclient.get('http://localhost:3000/posts/'+id)
  }

  updateUserbyId(obj: any){
    return this.httpclient.put('http://localhost:3000/posts',obj)
  }
}
