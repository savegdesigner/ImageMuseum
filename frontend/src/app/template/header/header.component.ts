import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userActive

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.checkUserActive()
      .subscribe(res => {
        this.userActive = res,
        error => console.log(error)
      })

  }

  public logout(): void {
    this.authService.logout()
      .subscribe(res => {
        console.log(res)
      })
    this.router.navigate(['home'])
  }

}
