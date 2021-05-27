import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsSidenavComponent } from './notifications-sidenav.component';

describe('NotificationsSidebarComponent', () => {
  let component: NotificationsSidenavComponent;
  let fixture: ComponentFixture<NotificationsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
