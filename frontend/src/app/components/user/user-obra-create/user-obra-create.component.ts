import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import Obra from 'src/app/models/Obra.model';

@Component({
  selector: 'app-user-obra-create',
  templateUrl: './user-obra-create.component.html',
  styleUrls: ['./user-obra-create.component.scss']
})
export class UserObraCreateComponent implements OnInit {

  public obraName: string
  public userId: string 
  public imageStyle: object
  public img
  public editorOn: boolean = false

  public editorForm: FormGroup = new FormGroup({
    grayscale: new FormControl(),
    hue: new FormControl(),
    saturate: new FormControl(),
    sepia: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    
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

  public resetImageStyle(): void {
    
  }

  public createObra(): void {
    console.log({
      'userId': this.userId,
      'obraName': this.obraName,
      'imgFile': this.img,
      'imageStyle': this.imageStyle
    })
    
  }

}