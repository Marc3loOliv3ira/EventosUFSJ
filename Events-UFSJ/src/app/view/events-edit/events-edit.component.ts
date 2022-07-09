import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsEditService } from './events-edit.service';



@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {
  d_events : any;
  constructor(private eventsEdit : EventsEditService,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.d_events = {};
  }
  atualizaEvento(frm: FormGroup){
    this.eventsEdit.putEvents(this.d_events).subscribe(resposta => {
      this.router.navigate(['/events']);
    });
  }
}
