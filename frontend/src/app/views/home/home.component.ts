import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Obra from 'src/app/models/Obra.model';
import { ObraService } from 'src/app/services/obra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public obras: Array<Obra> = []

  constructor(
    private carouselConfig: NgbCarouselConfig,
    private obraService: ObraService
    ) { 
    this.carouselConfig.interval = 3000;
    this.carouselConfig.wrap = false;
    this.carouselConfig.keyboard = false;
    this.carouselConfig.pauseOnHover = true;
    this.carouselConfig.showNavigationArrows = false;
    this.carouselConfig.showNavigationIndicators  = false;
  }

  ngOnInit(): void {
    this.readObras()
  }

  public readObras(): void {
      this.obraService.readObras()
        .subscribe(obras => {
          this.obras = obras,
          error => console.log(error)
        })

  }

}
