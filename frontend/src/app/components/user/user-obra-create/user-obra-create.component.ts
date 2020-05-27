import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import Obra from 'src/app/models/Obra.model';

@Component({
  selector: 'app-user-obra-create',
  templateUrl: './user-obra-create.component.html',
  styleUrls: ['./user-obra-create.component.scss']
})
export class UserObraCreateComponent implements OnInit {

  public obra: Obra
  public userId: string 
  public imageStyle: object

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

  public aplicar(): void {
    let grayscale = this.editorForm.value.grayscale || 0
    let hue = this.editorForm.value.hue || 0
    let saturate = this.editorForm.value.saturate || 0
    let sepia = this.editorForm.value.sepia || 0

    this.imageStyle = {
      'filter': `grayscale(${grayscale}%) hue-rotate(${hue}deg) saturate(${saturate}%) sepia(${sepia}%)`
    }

      console.log(this.imageStyle)

  }

  public getImageFile(event): void {
    console.log(event.target.files)
  }

}