import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  posts: Post[] = []
  name!: string
  avatar!:string
  default_img = '/assets/icon/default.png'

  
  constructor(private postSrv: PostService, private authSrv: AuthService , private dialogRef:MatDialog) { }


  ngOnInit(): void {
    this.getName()
  }

  openDialog(){
    this.dialogRef.open(PostComponent)
  }

  getName() {
    let x: any = localStorage.getItem('user')
    let y = JSON.parse(x)
    this.name = y.user.name
    if(this.avatar = y.user.avatar){
      this.avatar = y.user.avatar
    }else{
      this.avatar = this.default_img
    }
  }

  logout() {
    this.authSrv.logout()
  }

}
