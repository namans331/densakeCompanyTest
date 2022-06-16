import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import * as actions from '../store/action';

@Injectable()
export class NotificationEffects {
    constructor(
        private actions$: Actions,
        private notificationService: NotificationService
    ) { }

    loadNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getNotification),
      exhaustMap(() =>
        this.notificationService
          .getNotificationData()
          .pipe(map(list => actions.getNotificationSuccess(list)))
      )
    )
  );
}