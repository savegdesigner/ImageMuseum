import { Component, OnInit } from '@angular/core';
import { ObraService } from 'src/app/services/obra.service';
import Obra from 'src/app/models/Obra.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

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
    private obraService: ObraService
    ) { 
    this.carouselConfig.interval = 5000;
    this.carouselConfig.wrap = false;
    this.carouselConfig.keyboard = false;
    this.carouselConfig.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'))
    this.readObras()
  }

  public readObras(): void {
    this.obraService.readObraById(this.userId)
      .subscribe(obras => {
        this.obras = obras
        console.log(this.obras),
        error => console.log(error)
      })
  }

}
