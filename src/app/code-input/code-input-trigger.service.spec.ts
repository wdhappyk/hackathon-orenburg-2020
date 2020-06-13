import { TestBed } from '@angular/core/testing';

import { CodeInputTriggerService } from './code-input-trigger.service';

describe('CodeInputTriggerService', () => {
  let service: CodeInputTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeInputTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
