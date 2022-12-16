import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = []
  name!: string
  avatar!: string
  default_img = '/assets/icon/default.png'


  constructor(private postSrv: PostService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.getPost();
    this.getName();
  }

  openDialog() {
    this.dialogRef.open(PostComponent)
  }

  getName() {
    let x: any = localStorage.getItem('user')
    let y = JSON.parse(x)
    this.name = y.user.name
    if (this.avatar = y.user.avatar) {
      this.avatar = y.user.avatar
    } else {
      this.avatar = this.default_img
    }
  }

  getPost() {
    this.postSrv.getPost().subscribe((res) => {
      this.posts = res.reverse()
      console.log(this);
    })
  }
}
