import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from 'src/app/models/User.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public user: User = new User('', '')

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  public getUser(): void {
    this.userService.getUser()
      .subscribe(user => {
        this.user = user,
        error => console.log(error)
      })
  }

}
