import { Component, OnInit, Input } from '@angular/core';
import { Sign } from '../sign';
import { Planet } from '../planet';
import { PLANETS } from '../thePlanets';


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  @Input() sign: Sign;

  constructor() { }

  ngOnInit() {
  }

}
