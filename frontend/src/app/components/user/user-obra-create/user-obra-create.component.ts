import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import Obra from 'src/app/models/Obra.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Imagem from 'src/app/models/Imagem.model';
import { ObraService } from 'src/app/services/obra.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-obra-create',
  templateUrl: './user-obra-create.component.html',
  styleUrls: ['./user-obra-create.component.scss']
})
export class UserObraCreateComponent implements OnInit {

  public messages = new Subject<string>()
  public messagesToShow: string = ''

  public obraName: string
  public userId: string 
  public imageStyle: object
  public img
  public editorOn: boolean = false
  public images : Array<Imagem> = []
  public obra: Obra = new Obra

  public editorForm: FormGroup = new FormGroup({
    grayscale: new FormControl(),
    hue: new FormControl(),
    saturate: new FormControl(),
    sepia: new FormControl()
  })

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
    this.carouselConfig.showNavigationIndicators  = true;
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')

    this.messages.subscribe(message => {
      this.messagesToShow = message
    })
    
  }

  public getImageFile(event): void {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])

    reader.onload = () => {
      this.img = reader.result
    }

    this.editorOn = true

  }

  public aplicar(): void {
    let grayscale = this.editorForm.value.grayscale || 0
    let hue = this.editorForm.value.hue || 0
    let saturate = this.editorForm.value.saturate || 0
    let sepia = this.editorForm.value.sepia || 0

    this.imageStyle = {
      'filter': `grayscale(${grayscale}%) hue-rotate(${hue}deg) saturate(${saturate}%) sepia(${sepia}%)`
    }

  }

  public selectObra(): void {

    let imagem = new Imagem
    imagem.style = this.imageStyle 
    imagem.file = this.img
    imagem.editingId = this.images.length
    this.images.push(imagem)

    this.obra.name = this.obraName
    this.obra.user_id = parseInt(this.userId)
    this.obra.images = this.images

  }

  public deleteImagem(id: number): void {
    for(let i = 0; i < this.images.length; i++){
      if(this.images[i].editingId == id){
        this.images.splice(i, 1)
      }
    }
  }

  public createObra(): void {

    if(this.obra.name == undefined || this.obra.name == ''){
      this.messages.next('Sua obra precisa de um nome')

    }else{
      this.obraService.createObra(this.obra)
      .subscribe(res => {
        this.router.navigate(['user/obras'])

      })
    }

  }

}