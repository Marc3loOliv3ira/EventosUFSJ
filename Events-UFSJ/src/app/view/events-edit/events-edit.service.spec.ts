import { TestBed } from '@angular/core/testing';

import { EventsEditService } from './events-edit.service';

describe('EventsEditService', () => {
  let service: EventsEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
