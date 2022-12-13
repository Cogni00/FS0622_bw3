import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv: PostService) { }

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
