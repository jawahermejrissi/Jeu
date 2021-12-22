import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { ApiService } from 'src/app/Services/api.service';
import { FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  dataSaved = false;  
  RoomForm: any; 
message=null;

  constructor( private formbulider: FormBuilder,public service: ApiService) { }

  ngOnInit(): void {
    this.RoomForm = this.formbulider.group({  
      round: ['', [Validators.required]],  
      draw_time: ['', [Validators.required]],  
      language: ['', [Validators.required]],  
      custom_words: ['', [Validators.required]], 

    }); 
  }
  

 

  public quantities: Array<number> = [];
  getQuantity() {
     for (let i = 3; i <= 10; i++) {
       this.quantities.push(i)
     }
   }

   public times: Array<number> = [];
   getTime() {
      for (let i = 3; i <= 10; i++) {
        this.times.push(i)
      }
    }

    counter(i: number) {
     
      return new Array(i);
  }


  
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
