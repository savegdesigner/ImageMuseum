import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import User from 'src/app/models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repeatPassword: new FormControl()
  })

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  public signup(): void {
    let newUser: User = new User(
      this.signupForm.value.email,
      this.signupForm.value.password
    )

    newUser.name = this.signupForm.value.name

    this.authService.signUp(newUser)
      .subscribe((response: any) => {
        console.log(response)
        this.router.navigate(['auth/signin']),
        error => console.log(error)
      })

  }

}
