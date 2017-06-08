import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { Request } from '../request';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [Request]
})
export class PostsComponent implements OnInit {
	posts: Post[] = [];

  constructor(private request: Request) {
  }

  ngOnInit() {
  	this.request.get("http://jsonplaceholder.typicode.com/posts").then(response => {
			console.log("Got response:", response);
			this.posts = response;
			}).catch(error => {
				console.log("Got error:", error);
			}).then(response => {
				console.log("Another response:", response);
			}).catch(error => {
				console.log("Got another error:", error);
			});
  }

}
