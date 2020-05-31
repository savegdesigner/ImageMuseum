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
    this.carouselConfig.interval = 5000;
    this.carouselConfig.wrap = false;
    this.carouselConfig.keyboard = false;
    this.carouselConfig.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.readObras()
  }

  public readObras(): void {
      this.obraService.readObras()
        .subscribe(obras => {
          this.obras = obras
          console.log(this.obras),
          error => console.log(error)
        })

  }

}
