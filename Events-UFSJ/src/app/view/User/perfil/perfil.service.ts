import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from 'app/view/globals/globals';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient, private globals:Globals) { }
  addEventos(perfil : any ){
    return this.http.post("http://localhost:3000/events/create",perfil,this.header());
  }
  header(){
    return{
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'x-access-token': this.globals.loginData.token
      })
    };
  }
}
