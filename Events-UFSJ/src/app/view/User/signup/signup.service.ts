import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient ) { 

  }
  addUsuario(usuario : any ){
    return this.http.post("http://localhost:3000/user/signup",usuario);
  }
}
