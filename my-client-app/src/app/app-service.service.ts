import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getActors(): Observable<any[]> {
    console.log('app service');
    return this.http.get<any[]>('http://localhost:3000/');
  }
}
