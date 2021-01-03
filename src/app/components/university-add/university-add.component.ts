import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-university-add',
  templateUrl: './university-add.component.html',
  styleUrls: ['./university-add.component.css']
})
export class UniversityAddComponent implements OnInit {
  public universtyAddform: FormGroup
  constructor(fb: FormBuilder) {

    let universtyAddControls = {

      name: new FormControl("", [
        Validators.required
      ]),
      price: new FormControl("", [
        Validators.required
      ]),
      imageUrl: new FormControl("", [
        Validators.required
      ]),
      description: new FormControl("", [
        Validators.required
      ]),
      

    }

    this.universtyAddform = fb.group(universtyAddControls)

  }

  ngOnInit(): void {
  }
  public addUnivesity():void
  {
    console.log(this.universtyAddform.value)

  }

}
