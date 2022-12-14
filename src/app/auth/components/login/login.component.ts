import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  err: string | undefined
  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onsubmit(form: NgForm) {
    console.log(form.value);
    await this.authSrv.login(form.value).pipe(catchError(err => {
      if (err.error == "Cannot find user") {
        this.err = `Utente non registrato`
      } else if (err.error == "Incorrect password") {
        this.err = `Password errata`
      } else if (err.error == "Email format is invalid") {
        this.err = `Formato email errato`
      }
      throw err
    })).toPromise();
    this.router.navigate(['/'])
    // da decidere dove punta una vlota fatto login['/']
  }

}
