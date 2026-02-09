import { TestBed } from '@angular/core/testing';

import { CamelManagementService } from './camel-management.service';

describe('CamelManagementService', () => {
  let service: CamelManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamelManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
