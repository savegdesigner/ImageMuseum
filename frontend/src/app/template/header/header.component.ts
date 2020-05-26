import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userActive

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkUserActive()
      .subscribe(res => {
        this.userActive = res,
        error => console.log(error)
      })

  }

}
