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
  registerForm: FormGroup;
  submitted = false;
  signs = SIGNS;
  selectedSign: Sign;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = new FormGroup({
      sign: new FormControl(null)
    })
  }

  get sign(): string {
    return this.form ? this.form.get('sign').value : '';
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      signs: ['', Validators.required],
    });
  }
  
  onSelect(sign: Sign): void {
    this.selectedSign = sign;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }
  }
}

