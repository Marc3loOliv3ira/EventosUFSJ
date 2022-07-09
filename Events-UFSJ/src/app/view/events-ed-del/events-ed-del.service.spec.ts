import { TestBed } from '@angular/core/testing';

import { EventsEdDelService } from './events-ed-del.service';

describe('EventsEdDelService', () => {
  let service: EventsEdDelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsEdDelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
