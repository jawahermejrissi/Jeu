import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User: any = [];

  constructor( public restapi : ApiService ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

    // Get userslist
    loadUsers() {
      return this.restapi.getUserss().subscribe((data: {}) => {
        this.User= data;
      })
    }

}
