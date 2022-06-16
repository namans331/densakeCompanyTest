import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import { getNotification } from './notification/store/action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'densake_test';
  constructor(private store: Store,private router: Router) {
    // Dispatch the action to get notification list
    this.store.dispatch(getNotification());
    // below routing is done to redirect to notification page
    this.router.navigateByUrl('densake/notification/list');
  }
}
