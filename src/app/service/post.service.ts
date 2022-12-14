import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { CommentPost, Like, Post, PostGet, PostPut, User } from '../interface/post';

@Injectable({

  providedIn: 'root'
})
export class PostService {

  urlPath = ' http://localhost:4201/post'


  constructor(private http: HttpClient) { }

  posta(data: PostGet) {
    return this.http.post<PostGet>(this.urlPath, data).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }

  getPost() {
    return this.http.get<Post[]>(this.urlPath).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }

  postComment(data: PostGet, id: number) {
    return this.http.put<PostGet>(this.urlPath + `/${id}`, data).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }


  modificaPost(data: PostGet, id: number) {
    return this.http.put<PostGet>(this.urlPath + `/${id}`, data).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }

  eliminaPost(id:number){
    return this.http.delete(this.urlPath + `/${id}`)
  }

  getName(id: number) {
    return this.http.get<User>('http://localhost:4201/users/' + id)
  }

  aggiungiLike(id: number) {
    let takeUser: any = localStorage.getItem('user')
    let user = JSON.parse(takeUser)
    let uId = user.user.id

    let newLike: Like = {
      postId: id,
      userId: uId
    }

    return this.http.post<Like>('http://localhost:4201/favorites', newLike).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }

  getFav() {
    let takeUser: any = localStorage.getItem('user')
    let user = JSON.parse(takeUser)
    let uId = user.user.id

    return this.http.get<Like[]>(`http://localhost:4201/favorites?userId=${uId}`).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }

  deleteLike(id: number) {
    return this.http.delete(`http://localhost:4201/favorites/${id}`)
  }

}

