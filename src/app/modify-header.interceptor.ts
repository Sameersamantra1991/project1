import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ModifyHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const req2 = request.url;
    console.log(req2)

  const API_KEY = "testing1234";
  const req = request.clone({
    setHeaders: {
      API_KEY}
  })

  
    return next.handle(req);
  }
}
