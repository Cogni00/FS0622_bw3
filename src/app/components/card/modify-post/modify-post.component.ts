import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms'

@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.scss']
})
export class ModifyPostComponent implements OnInit {

  @ViewChild('form') form!: NgForm
  heroForm!: FormGroup;



  constructor(private postSrv: PostService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: {
    title: string,
    description: string,
    emoji: string,
    img: string,
    id: number,
    user_id: number,
    commenti: object[],
    date: {}

  }) { }

  ngOnInit(): void {
    this.heroForm = this.fb.group({

      newTitle: this.fb.control(this.data.title),
      newDescription: this.fb.control(this.data.description),
      newImg: this.fb.control(this.data.img),
      newEmoji: this.fb.control(this.data.emoji)

    })
  }

  submit() {

    let data: Post = {
      title: this.heroForm.value.newTitle,
      description: this.heroForm.value.newDescription,
      img: this.heroForm.value.newImg,
      emoji: this.heroForm.value.newEmoji,
      id: this.data.id,
      user_id: this.data.user_id,
      commenti: this.data.commenti,
      date: this.data.date
    }
    this.postSrv.modificaPost(data, this.data.id).subscribe((res => {
      res
    }))
    window.location.reload()
  }

}
