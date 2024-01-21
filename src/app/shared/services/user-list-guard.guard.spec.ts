import { TestBed } from '@angular/core/testing';

import { UserListGuardGuard } from './user-list-guard.guard';

describe('UserListGuardGuard', () => {
  let guard: UserListGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserListGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
