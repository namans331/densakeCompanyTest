import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/densake', pathMatch: 'full'
  },
  {
    path: 'densake', component: HomeComponent,
    children: [
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
      }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
