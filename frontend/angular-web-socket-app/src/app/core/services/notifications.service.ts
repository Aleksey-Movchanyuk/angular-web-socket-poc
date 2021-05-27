import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Notification } from '../../shared/models/notification';
import { NOTIFICATIONS } from '../mocks/mock-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  getNotifications(): Observable<Notification[]> {
    const notifications = of(NOTIFICATIONS);
    return notifications;
  }

  deleteNotification(notificationId: number) {
    NOTIFICATIONS.splice(NOTIFICATIONS.findIndex(item => item.id === notificationId), 1)
  }

  deleteAllNotifications() {
    NOTIFICATIONS.length = 0;
  }
}
