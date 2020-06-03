import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import User from 'src/app/models/User.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public messages = new Subject<string>()
  public messagesToShow: string = ''

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
    this.messages.subscribe(message => {
      this.messagesToShow = message
    })
  }

  public signup(): void {
    let newUser: User = new User(
      this.signupForm.value.email,
      this.signupForm.value.password
    )

    if(newUser.email == null || newUser.email == '' || newUser.email == undefined
    || newUser.password == null || newUser.password == '' || newUser.password == undefined
    || this.signupForm.value.name == null || this.signupForm.value.name == undefined || this.signupForm.value.name == ''){
      this.messages.next('Preencha todos os campos')
  }else{
      this.messages.next('')

      newUser.name = this.signupForm.value.name

      this.authService.signUp(newUser)
        .subscribe((response: any) => {
          this.router.navigate(['auth/signin']),
          error => console.log(error)
        })

    }

  }

}
