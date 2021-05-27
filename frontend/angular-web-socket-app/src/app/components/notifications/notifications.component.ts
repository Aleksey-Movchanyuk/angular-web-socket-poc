import { Component, OnInit } from '@angular/core';

import { Notification } from '../../shared/models/notification';
import { NotificationsService } from '../../core/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationsService.getNotifications()
        .subscribe(notifications => this.notifications = notifications);
  }

  deleteNotification(id: number): void {
    this.notificationsService.deleteNotification(id);
  }

  deleteAllNotifications(): void {
    this.notificationsService.deleteAllNotifications();
  }

}
