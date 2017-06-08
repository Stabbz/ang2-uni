import { Component, OnInit, Injectable } from '@angular/core';
import { User } from './user';
import { Request } from '../request';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [Request]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private request: Request) {
  }

  ngOnInit() {
  	this.request.get("http://jsonplaceholder.typicode.com/users").then(response => {
			console.log("Got response:", response);
			this.users = response;
			}).catch(error => {
				console.log("Got error:", error);
			}).then(response => {
				console.log("Another response:", response);
			}).catch(error => {
				console.log("Got another error:", error);
			});
  }

}
