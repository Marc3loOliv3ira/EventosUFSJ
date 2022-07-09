import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from '../globals/globals';


@Injectable({
  providedIn: 'root'
})
export class EventsCreateService {


  constructor(private http: HttpClient, private globals:Globals) { 
   
  }
  addEventos(events : any ){
    return this.http.post("http://localhost:3000/events/create",events,this.header());
  }
  header(){
    return{
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'x-access-token': this.globals.loginData.token
      })
    };
  }

}
