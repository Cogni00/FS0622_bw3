import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { CommentPost, Post, PostGet } from '../interface/post';

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

  postComment(data:PostGet , id:number){
    return this.http.put<PostGet>(this.urlPath + `/${id}`, data).pipe(catchError(err =>{
      console.log(err);
      throw err
    }))
  }

}

