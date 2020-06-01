import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObraService } from 'src/app/services/obra.service';
import { FormGroup, FormControl } from '@angular/forms';
import Imagem from 'src/app/models/Imagem.model';
import Obra from 'src/app/models/Obra.model';

@Component({
  selector: 'app-user-obra-update',
  templateUrl: './user-obra-update.component.html',
  styleUrls: ['./user-obra-update.component.scss']
})
export class UserObraUpdateComponent implements OnInit {

  public obraId: string = this.route.snapshot.paramMap.get('id')
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
    private obraService: ObraService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.setup()
  }

  public setup(): void {
    let obraId = parseInt(this.obraId)
    this.obraService.getObraById(obraId)
      .subscribe(obra => {
        this.obraName = obra.nome
        obra.imagens.forEach(image => {
          let imagemAntiga = new Imagem
          imagemAntiga.style = {'filter': `${image.filtro}`}
          imagemAntiga.src = `http://127.0.0.1:8000/storage/${image.imagem}`
          this.images.push(imagemAntiga)
        }),
        error => console.log(error)
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
    this.images.push(imagem)

    this.obra.name = this.obraName
    this.obra.user_id = parseInt(this.userId)
    this.obra.images = this.images

  }

  public update(): void {
    let obraId = parseInt(this.obraId)
    this.obraService.updateObra(obraId, this.obra)
      .subscribe(res => {
        this.router.navigate(['user/obras']),
        error => console.log(error)
      })
  }

}
