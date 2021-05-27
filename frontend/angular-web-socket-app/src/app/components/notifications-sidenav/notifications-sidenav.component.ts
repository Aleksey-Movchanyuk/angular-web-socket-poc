import { Component, OnInit, ViewChild } from '@angular/core';
 
import { NotificationsSidenavService } from './notifications-sidenav.service';

@Component({
  selector: 'app-notifications-sidenav',
  templateUrl: './notifications-sidenav.component.html',
  styleUrls: ['./notifications-sidenav.component.css']
})
export class NotificationsSidenavComponent implements OnInit {

  constructor(private notificationSidenavService: NotificationsSidenavService) {
  	}

	ngOnInit(): void {}

  toggleNotificationsSidenav() {
		this.notificationSidenavService.toggle();
	}

}
