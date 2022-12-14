import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthData } from 'src/app/auth/auth.service';
import { Post, PostGet, PostPut, User } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() p!: any

  name!: string
  surname!: string

  data!: string

  isFav: boolean = false
  preferiti: any

  newTitle: string = ''
  newDescription: string = ''
  newEmoji: string = ''


  @ViewChild('form') form!: NgForm
  @ViewChild('user') user!: AuthData

  constructor(private postSrv: PostService, private r: Router) { }

  ngOnInit(): void {
    this.getFavorites()
    this.getName()
    this.formaData()
  }

  getFavorites() {
    this.postSrv.getFav().subscribe((res) => {
      let favorites = res
      let x = favorites.find((f: any) => f.postId == this.p.id)
      if (x) {
        this.isFav = true
        this.preferiti = x
      } else {
        this.isFav = false
      }
    })
  }


  like(id: number) {
    this.getFavorites()
    this.postSrv.aggiungiLike(id).subscribe(res => {
      console.log(res);
      this.isFav = true
    })
  }

  rimuoviLike() {
    this.postSrv.deleteLike(this.preferiti.id).subscribe(res => {
      console.log(res);
    })
    this.isFav = false
  }


  elimina(id:number){
    this.postSrv.eliminaPost(id).subscribe(res=>{
      res
    })
    window.location.reload()
  }


  visualizzaDati(p: Post) {
      let data = {
        newTitle: p.title,
        newDescription: p.description,
        newEmoji: p.emoji
      }
      this.form.setValue(data)
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
    window.location.reload()
  }




  sendComment(form: NgForm, p: Post) {
    let data: PostGet = {
      title: p.title,
      description: p.description,
      emoji: p.emoji,
      commenti: p.commenti,
      date: p.date,
      user_id: p.user_id
    }
    let y = form.value.comment

    if (y) {
      let x = data.commenti.push(y)
      this.postSrv.postComment(data, p.id).subscribe((res => {
        console.log(res);
        res
      }))
    } else if (y = '') {
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

  getName() {
    this.postSrv.getName(this.p.user_id).subscribe(res => {
      let user = res
      this.name = user.name
      this.surname = user.surname
    })
  }

  formaData() {
    var a = this.p.date.mese
    var b = "";
    var g = this.p.date.giorno
    var h = this.p.date.ora
    var m = this.p.date.minuti
    var m2 = ('0' + m).slice(-2)

    switch (a) {
      case 0: b = "Gennaio";
        break;
      case 1: b = "Febbraio";
        break;
      case 2: b = "Marzo";
        break;
      case 3: b = "Aprile";
        break;
      case 4: b = "Maggio";
        break;
      case 5: b = "Giugno";
        break;
      case 6: b = "Luglio";
        break;
      case 7: b = "Agosto";
        break;
      case 8: b = "Settembre";
        break;
      case 9: b = "Ottobre";
        break;
      case 10: b = "Novembre";
        break;
      case 11: b = "Dicembre";
        break;
    }

    this.data = `${g} ${b} alle ore ${h}:${m2}`
  }

}
