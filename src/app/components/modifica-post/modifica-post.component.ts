import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-modifica-post',
  templateUrl: './modifica-post.component.html',
  styleUrls: ['./modifica-post.component.scss']
})
export class ModificaPostComponent implements OnInit {

  @ViewChild('form') form!: NgForm
  @Input() dati!: any

  constructor(private postSrv: PostService, private r: Router) { }

  ngOnInit(): void {
  }

  modifica(f: NgForm) {
    let data: Post = {
      title: this.form.value.newTitle,
      description: this.form.value.newDescription,
      emoji: this.form.value.newEmoji,
      id: this.p.id,
      user_id: this.p.user_id,
      commenti: this.p.commenti,
      date: this.p.date
    }
    this.postSrv.modificaPost(data, this.p.id).subscribe((res => {
      res
    }))
    this.r.navigate([''])
  }

}
