import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PLANETS } from '../thePlanets';
import { Planet } from '../planet';

@Component({
  selector: 'app-rulling-planet',
  templateUrl: './rulling-planet.component.html',
  styleUrls: ['./rulling-planet.component.scss']
})
export class RullingPlanetComponent implements OnInit {
  title = 'rulling-planet';
  registerForm: FormGroup;
  submitted = false;
  planets = PLANETS;
  selectedPlanet: Planet;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      planets: ['', Validators.required],
    });
  }
  
  onSelect(planet: Planet): void {
    this.selectedPlanet = planet;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }
  }
}

