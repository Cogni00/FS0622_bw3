import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Post, User } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import { Auth } from 'src/app/auth/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  posts: Post[] = []
  users: User[] = []
  name!: string
  avatar!:string
  hidden = false;
  default_img = '/assets/icon/default.png'

  
  constructor(private postSrv: PostService, private authSrv: AuthService) { }


  ngOnInit(): void {
    this.getName()
    this.stampaUtenti()
  }

  stampaUtenti(){
    this.authSrv.stampa().subscribe((res)=>{
      this.users = res
      
      console.log(res);
      console.log(this.users);

    })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
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
