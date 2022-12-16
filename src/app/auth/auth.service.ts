import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Auth } from './auth';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../interface/post';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  URL = 'http://localhost:4201';
  private authSub = new BehaviorSubject<Auth | null>(null);
  user$ = this.authSub.asObservable();
  timeOut: any;

  constructor(private http: HttpClient, private router: Router) {
    this.ripristina()
  }


  login(data: { email: string; password: string }) {
    return this.http.post<Auth>(`${this.URL}/login`, data).pipe(catchError(err => {
      throw err
    }), tap((data) => {
      this.authSub.next(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.autoLogout(data);


    })
    );
  }
  logout() {
    this.authSub.next(null)
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  registration(data: { name: string, surname: string, email: string, password: string }) {
    return this.http.post(`${this.URL}/register`, data).pipe(catchError(err => {
      console.log(err);
      throw err
    }));
  }

  autoLogout(data: Auth) {
    const scadenza = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
    const intervallo = scadenza.getTime() - new Date().getTime();
    this.timeOut = setTimeout(() => {
      this.logout();
    }, intervallo)
  }

  ripristina() {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const userData: Auth = JSON.parse(user);
    if (this.jwtHelper.isTokenExpired(userData.accessToken)) {
      return;
    }
    this.authSub.next(userData);
    this.autoLogout(userData);
  }

  stampa(){
    return this.http.get<User[]>(`${this.URL}/users`).pipe(catchError(err=>{
      throw err
    }))
  }

}
