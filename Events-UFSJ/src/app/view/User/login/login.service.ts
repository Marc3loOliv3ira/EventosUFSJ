import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  auth(usuario : any ): Observable<LoginResponse>{
    return this.http.post<LoginResponse>("http://localhost:3000/user/auth",usuario);
  }
}
