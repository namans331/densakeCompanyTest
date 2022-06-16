import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "assets/json";
  
  getNotificationData(): Observable<any> {
    let url: string = `${this.baseUrl}/data.json`;
    return this.http.get<any>(url);
  }
}
