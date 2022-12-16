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
 user_id! : number;
 avatar! : string;
 err!: string;


  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.getName();
    console.log(this.surname)
    this.getPost()
  }

  getPost() {
    this.postSrv.getPostById().subscribe((res) => {

      console.log(res);
      if (res.length === 0) {
        console.log("Array is empty!")
        this.err = `Non hai ancora postato nulla. Inizia subito!`


      }else{
        this.posts = res
      }


    })
  }

  getName() {
    let x: any = localStorage.getItem('user')
    let y = JSON.parse(x)
    this.name = y.user.name
    this.surname = y.user.surname
    this.avatar = y.user.avatar
  }


}
