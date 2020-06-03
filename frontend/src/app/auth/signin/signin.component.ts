import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';
import User from 'src/app/models/User.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public messages = new Subject<string>()
  public messagesToShow: string = ''

  public signinForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.messages.subscribe(message => {
      this.messagesToShow = message
    })
  }

  public signIn(): void {

    let user: User = new User(
      this.signinForm.value.email,
      this.signinForm.value.password
    )

    if(user.email == null || user.email == '' || user.email == undefined
      || user.password == null || user.password == '' || user.password == undefined){
        this.messages.next('Preencha todos os campos')
    }else{
      this.messages.next('')

      this.authService.signin(user)
      .subscribe(response => {
        this.authService.setToken(response.access_token)
        this.userService.setId(response.user_id)
        this.userService.checkUserActive()
        this.router.navigate([''])
      })

    }
        
  }

}
