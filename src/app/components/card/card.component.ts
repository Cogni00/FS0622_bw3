import { Component, Input, OnInit } from '@angular/core';
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

  @Input() p!: any
  

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
  }

  sendComment(form: NgForm, p: Post) {
    let data: PostGet = {
      title: p.title,
      description: p.description,
      emoji: p.emoji,
      commenti: p.commenti
    }
    let y = form.value.comment
    
    if(y){
      let x = data.commenti.push(y)
      this.postSrv.postComment(data, p.id).subscribe((res => {
        console.log(res);
        res
      }))
    }else if(y = ''){
      catchError(err => {
        console.log(err);
        throw err
      })
    }

    form.reset()
  }

  openMore(id: number) {
    let more = document.getElementById('moreOption' + id)
    more!.classList.toggle('toggle');
  }

}
