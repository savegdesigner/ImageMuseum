import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Obra from 'src/app/models/Obra.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public obras: Array<Obra> = []

  constructor(private carouselConfig: NgbCarouselConfig) { 
    this.carouselConfig.interval = 5000;
    this.carouselConfig.wrap = false;
    this.carouselConfig.keyboard = false;
    this.carouselConfig.pauseOnHover = true;
  }

  ngOnInit(): void {
    // let obra1: Obra = new Obra
    // obra1.name = 'Obra teste 1'

    // let obra2: Obra = new Obra
    // obra2.name = 'Obra teste 2'

    // this.obras.push(obra1, obra2)
  }

}
