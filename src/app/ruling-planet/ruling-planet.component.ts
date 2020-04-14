import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Sign } from '../sign';
import { SIGNS } from '../theSigns';

@Component({
  selector: 'app-ruling-planet',
  templateUrl: './ruling-planet.component.html',
  styleUrls: ['./ruling-planet.component.scss']
})
export class RulingPlanetComponent implements OnInit {
  title = 'ruling-planet';
  submitted = false;
  signs = SIGNS;
  selectedSign: Sign;
  form: FormGroup;  

  constructor(private formBuilder: FormBuilder) { 
    this.form = new FormGroup({
    sign: new FormControl(null)
    })
  }

  //displays values of selected sign
  get sign(): string {
    return this.form ? this.form.get('sign').value : '';
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sign: ['', Validators.required],
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
    return;
  }
  }

}

