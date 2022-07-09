import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsCreateService } from './events-create.service';


@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})
export class EventsCreateComponent implements OnInit {

  c_events: any;

  constructor(private eventsService : EventsCreateService,private router: Router) { }

  ngOnInit(){
    this.c_events = {};
    
  }
  adicionarEvento(frm: FormGroup){
    this.eventsService.addEventos(this.c_events).subscribe(resposta => {
      this.router.navigate(['/events']);
    });
  }
}
