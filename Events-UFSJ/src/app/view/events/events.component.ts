import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

export class Event{
  title: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  dados : Event[];
  constructor(private eventsService : EventsService) { }

  ngOnInit(){
    this.eventsService.getEvents().subscribe(events => this.dados = events);
    
  }
  
  
}
