import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  err: string | undefined

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onsubmit(form: NgForm) {
    console.log('ciao');
    console.log(form.value);
    this.authSrv.registration(form.value).pipe(catchError(err => {
      if (err.error == "Email format is invalid") {
        this.err = `Il Formato dell'email non è valido`
      } else if (err.error == "Email already exists") {
        this.err = `L'email è gia esistente`
      } else if (err.error == "Password is too short") {
        this.err = `La password è troppo corta`
      }
      throw err
    })).subscribe(() => {
      this.err = undefined
      this.router.navigate(['/login']);
    })

  }

}
