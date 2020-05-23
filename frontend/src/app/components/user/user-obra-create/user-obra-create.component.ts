import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import Obra from 'src/app/models/Obra.model';

@Component({
  selector: 'app-user-obra-create',
  templateUrl: './user-obra-create.component.html',
  styleUrls: ['./user-obra-create.component.scss']
})
export class UserObraCreateComponent implements OnInit {

  private obra: Obra
  private userId: number = 1

  public form: FormGroup = new FormGroup({
    name: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void {

  }

}