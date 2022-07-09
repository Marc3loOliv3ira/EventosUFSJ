import { TestBed } from '@angular/core/testing';

import { EventsCreateService } from './events-create.service';

describe('EventsCreateService', () => {
  let service: EventsCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
