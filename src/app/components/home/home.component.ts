import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  posts: Post[] = []
  name!: string

  constructor(private postSrv: PostService, private authSrv: AuthService) { }


  ngOnInit(): void {
    this.getPost();
    this.getName()
  }

  getPost() {
    this.postSrv.getPost().subscribe((res) => {
      this.posts = res
      console.log(res);
    })
  }

  getName() {
    let x: any = localStorage.getItem('user')
    let y = JSON.parse(x)
    this.name = y.user.name
  }

  logout() {
    this.authSrv.logout()
  }

}
