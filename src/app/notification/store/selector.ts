import { createSelector } from '@ngrx/store';

import { NotificationState } from './state';

export const notificationSelector = createSelector(
    (state: NotificationState) => state.list,
    (list: any) => list
)