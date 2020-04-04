import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PLANETS } from '../thePlanets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets = PLANETS;
  selectedPlanet: Planet;

  constructor() { }

  ngOnInit() {
  }
  onSelect(planet: Planet): void {
    this.selectedPlanet = planet;
  }
}
