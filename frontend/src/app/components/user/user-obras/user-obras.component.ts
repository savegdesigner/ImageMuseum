import { Component, OnInit } from '@angular/core';
import { ObraService } from 'src/app/services/obra.service';
import Obra from 'src/app/models/Obra.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-obras',
  templateUrl: './user-obras.component.html',
  styleUrls: ['./user-obras.component.scss']
})
export class UserObrasComponent implements OnInit {

  public obras: Array<Obra> = []
  public userId: number

  constructor(
    private carouselConfig: NgbCarouselConfig,
    private obraService: ObraService,
    private router: Router
    ) { 
    this.carouselConfig.interval = 3000;
    this.carouselConfig.wrap = false;
    this.carouselConfig.keyboard = false;
    this.carouselConfig.pauseOnHover = true;
    this.carouselConfig.showNavigationArrows = false;
    this.carouselConfig.showNavigationIndicators  = false;
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'))
    this.readObras()
  }

  public readObras(): void {
    this.obraService.readObraById(this.userId)
      .subscribe(obras => {
        this.obras = obras,
        error => console.log(error)
      })
  }

  public navigateToUpdate(id: number): void {
    this.router.navigate([`user/obras/update/${id}`])
  }

  public delete(id: number): void{
    this.obraService.deleteObra(id)
      .subscribe(() => {
        this.router.navigate(['home']),
        error => console.log(error)
      })
  }

}
