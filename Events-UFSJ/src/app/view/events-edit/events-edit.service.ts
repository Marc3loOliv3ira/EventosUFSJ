import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from '../globals/globals';

export class Events1{
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class EventsEditService {

  constructor(private http: HttpClient,private globals:Globals) { }
  putEvents(events : any): Observable<any>{
    return this.http.put("http://localhost:3000/events/update",events,this.header());
  } 
  header(){
    return{
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'x-access-token': this.globals.loginData.token
      })
    };
  }
}
