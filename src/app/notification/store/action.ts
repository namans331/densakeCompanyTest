

import { createAction, props } from '@ngrx/store';

export const getNotification = createAction('[List] Get Notification');
export const getNotificationSuccess = createAction(
    '[List] Get Notification success',
    props<{list: any}>()
);