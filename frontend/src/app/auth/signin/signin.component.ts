import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';
import User from 'src/app/models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signinForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public signIn(): void {

    let user: User = new User(
      this.signinForm.value.email,
      this.signinForm.value.password
    )
    
      this.authService.signin(user)
        .subscribe(response => {
          this.authService.setToken(response.access_token)
          this.router.navigate(['home']),
          error => console.log(error)
        })
        
  }

}
