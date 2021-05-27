import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { NotificationsSidenavService } from './components/notifications-sidenav/notifications-sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-socket-app';  

  @ViewChild('notificationsidenav') public notificationsidenav: MatSidenav | any;

  constructor(private notificationSidenavService: NotificationsSidenavService) {}

  ngAfterViewInit() {
    this.notificationSidenavService.setSidenav(this.notificationsidenav);
  }

  toggleNotificationsSidenav() {
		this.notificationsidenav.toggle();
	}

  closeNotificationSidenav() {
    this.notificationsidenav.close();
  }
}
