import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Post, PostGet } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlPath = ' http://localhost:4201/post'

  constructor(private http:HttpClient) { }

  posta(data:PostGet){
    return this.http.post<PostGet>(this.urlPath,data).pipe(catchError(err =>{
      console.log(err);
      throw err
    }))
  }

}
