import { TestBed } from '@angular/core/testing';

import { AdministrationTasksService } from './administration-tasks.service';

describe('AdministrationTasksService', () => {
  let service: AdministrationTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrationTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
