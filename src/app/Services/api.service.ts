import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { User } from '../Models/User';
import { Room } from '../Models/Room';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:7210/api'
      room !: Room  ;
  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Fetch employees list
  getUserss(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/User')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  createRoom(room: Room): Observable<Room> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Room>(this.apiURL + '/Room',  
    room, httpOptions);  
  } 
 // HttpClient API post() method => Create room
 //createRoom(Room): Observable<Room> {
 // return this.http.post<Room>(this.apiURL + '/Room', JSON.stringify(room), this.httpOptions)
 // .pipe(
  //  retry(1),
   // catchError(this.handleError)
 // )
//} 
   // Error handling 
   handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
