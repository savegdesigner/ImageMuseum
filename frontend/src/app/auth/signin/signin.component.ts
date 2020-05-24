import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';
import User from 'src/app/models/User.model';

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public signIn(): void {

    let newUser: User = new User(
      this.signinForm.value.email,
      this.signinForm.value.password
    )
    
    console.log(newUser)

  }

}
