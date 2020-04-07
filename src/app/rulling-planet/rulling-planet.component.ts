import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sign } from '../sign';
import { SIGNS } from '../theSigns';

@Component({
  selector: 'app-rulling-planet',
  templateUrl: './rulling-planet.component.html',
  styleUrls: ['./rulling-planet.component.scss']
})
export class RullingPlanetComponent implements OnInit {
  title = 'rulling-planet';
  registerForm: FormGroup;
  submitted = false;
  signs = SIGNS;
  selectedSign: Sign;

  constructor(private formBuilder: FormBuilder) { }

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

