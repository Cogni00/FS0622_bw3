import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  commenta(id: number) {
    let c = document.getElementById('footer' + id)
    c!.classList.toggle('display')
  }

  moVedemo(form: NgForm) { }

}
