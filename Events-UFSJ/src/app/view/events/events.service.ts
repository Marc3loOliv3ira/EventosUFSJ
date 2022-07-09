import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './events.component';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>("http://localhost:3000/");
  } 


}
