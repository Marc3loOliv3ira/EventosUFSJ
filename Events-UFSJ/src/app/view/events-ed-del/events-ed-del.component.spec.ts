import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEdDelComponent } from './events-ed-del.component';

describe('EventsEdDelComponent', () => {
  let component: EventsEdDelComponent;
  let fixture: ComponentFixture<EventsEdDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsEdDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsEdDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
