import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from '../globals/globals';
import { Events } from './events-ed-del.component';

@Injectable({
  providedIn: 'root'
})
export class EventsEdDelService {

  constructor(private http: HttpClient,private globals:Globals) { }

  getTEvents(): Observable<Events[]>{
    return this.http.get<Events[]>("http://localhost:3000/events",this.header());
  } 
  
  remover(events: any){
    return this.http.delete("http://localhost:3000/events/delete/"+events,this.header())
  }

  header(){
    return{
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'x-access-token': this.globals.loginData.token
      })
    };
  }
}
