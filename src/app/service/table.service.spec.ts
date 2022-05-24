import { TestBed } from '@angular/core/testing';

import { ShirtService } from './table.service';

describe('TableService', () => {
  let service: ShirtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShirtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
