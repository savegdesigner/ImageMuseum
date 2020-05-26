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
  
  public userActive: boolean

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.userActive
      .subscribe(res => {
        this.userActive = res
      })

      this.isLoggedIn()

  }

  public logout(): void {
    this.authService.logout()
      .subscribe(res => {
        console.log(res)
        this.userService.logoutUser()
        this.userService.checkUserActive(),
        error => console.log(error)
      })
    this.router.navigate(['home'])

  }

  public isLoggedIn(): void {
    if(localStorage.getItem('userToken')){
      this.userActive = true
    }else{
      this.userActive = false
    }

  }

}
