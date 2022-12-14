import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postSrv.getPost().subscribe((res) => {
      this.posts = res
      console.log(res);
    })
  }
}
