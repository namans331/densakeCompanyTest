import {createReducer, on} from '@ngrx/store';
import {getNotification, getNotificationSuccess} from './action';
import {NotificationState} from './state';

const initialState: ReadonlyArray<any> = [];

export const notificationReducer = createReducer(
    initialState, 
    on(getNotificationSuccess, (state,{ list}) => list),
    on(getNotification, (state) => [...state])
)