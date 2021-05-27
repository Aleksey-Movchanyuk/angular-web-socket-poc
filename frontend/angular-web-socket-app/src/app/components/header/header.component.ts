import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NotificationsSidenavService } from '../notifications-sidenav/notifications-sidenav.service';
import { NotificationsService } from '../../core/services/notifications.service';
import { Notification } from '../../shared/models/notification';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationSidenavService: NotificationsSidenavService, private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationsService.getNotifications()
        .subscribe(notifications => this.notifications = notifications);
  }

  toggleNotificationsSidenav() {
		this.notificationSidenavService.toggle();
	}

}
