import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NotificationService } from '../../services/notification.service';
import { getNotification, getNotificationSuccess } from '../../store/action';
import { notificationSelector } from '../../store/selector';
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  list: any;
  constructor(private store: Store<any>, private notificationService: NotificationService) {
    // blank constructor
  }

  ngOnInit(): void {
    // NGRX type get Data
    this.store.pipe(select(getNotificationSuccess)).pipe().subscribe((data: any) => {
      console.log(data)
    })
    this.getList();
  }

  // Service type get data 
  getList() {
    this.notificationService.getNotificationData().subscribe((res: any) => {
      this.list = res[0].notificationList;
    })
  }

  /** To calculate the day difference between dates */
  dateDiffInDays(a: any, b: any) {
    a = new Date(a);
    b = new Date(b);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}
