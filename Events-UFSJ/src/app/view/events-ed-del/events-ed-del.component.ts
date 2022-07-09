import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsEdDelService } from './events-ed-del.service';

export class Events{
  id : number;
  title: string;
}

@Component({
  selector: 'app-events-ed-del',
  templateUrl: './events-ed-del.component.html',
  styleUrls: ['./events-ed-del.component.css']
})
export class EventsEdDelComponent implements OnInit {
  dados1 : Events[];
  constructor(private eventseddel : EventsEdDelService,private router: Router) { }


  ngOnInit(): void {
    this.eventseddel.getTEvents().subscribe(events => this.dados1 = events);
  }
  
  excluir(event: Events): void{
    this.eventseddel.remover(event.id).subscribe(response=>{
      this.router.navigate(['/events']);
    } )
  }
  
}
