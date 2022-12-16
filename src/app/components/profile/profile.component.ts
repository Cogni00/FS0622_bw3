import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  name!: string;
  posts: Post[] = []
  surname!: string;
  user_id!: number

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.getName();
    console.log(this.surname)
    this.getPost()
  }

  getPost() {
    this.postSrv.getPostById().subscribe((res) => {
      this.posts = res
      console.log(res);
    })
  }

  getName() {
    let x: any = localStorage.getItem('user')
    let y = JSON.parse(x)
    this.name = y.user.name
    this.surname = y.user.surname
  }


}
