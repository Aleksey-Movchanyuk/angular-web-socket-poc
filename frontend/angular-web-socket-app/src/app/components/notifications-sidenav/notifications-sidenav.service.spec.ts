import { TestBed } from '@angular/core/testing';

import { NotificationsSidenavService } from './notifications-sidenav.service';

describe('NotificationsSidenavService', () => {
  let service: NotificationsSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
