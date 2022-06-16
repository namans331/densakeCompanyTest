import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NotificationService } from './services/notification.service';

const route: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  }, 
  {
    path: 'list', component: NotificationListComponent
  }
]

@NgModule({
  declarations: [
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: [NotificationService]
})
export class NotificationModule { }
