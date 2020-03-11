import { Component, OnInit, Input } from '@angular/core';
import { Sign } from '../sign';
import { SIGNS } from '../theSigns';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.scss']
})
export class SignsComponent implements OnInit {
  
  signs = SIGNS;
  //selectedSign: Sign;


  constructor() { }

  ngOnInit() {
  }

}
