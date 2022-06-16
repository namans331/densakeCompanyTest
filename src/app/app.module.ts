import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { notificationReducer } from './notification/store/reducers';
import { NotificationEffects } from './notification/store/effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forRoot([NotificationEffects]),
    StoreModule.forRoot({ notification: notificationReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
