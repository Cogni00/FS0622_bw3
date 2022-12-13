import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { Post, PostGet } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  posts: Post[] = []

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postSrv.getPost().subscribe((res) => {
      this.posts = res
    })
  }
  
  sendComment(form: NgForm, p: Post) {
    let data: PostGet = {
      title: p.title,
      description: p.description,
      emoji: p.emoji,
      commenti: p.commenti
    }
    let y = form.value.comment
    let x = data.commenti.push(y)
    this.postSrv.postComment(data, p.id).pipe(catchError(err => {
      console.log(err);
      throw err
    })).subscribe((res => {
      console.log(res);
      res
    }))
  }

  openMore(id:number){
    let more = document.getElementById('moreOption')
    more!.style.display = 'block';
  }

}
