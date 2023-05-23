import { TestBed } from '@angular/core/testing';

import { CyclingUsersService } from './cycling.users.service';

describe('CyclingUsersService', () => {
  let service: CyclingUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclingUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
