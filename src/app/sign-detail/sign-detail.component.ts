import { Component, OnInit, Input } from '@angular/core';
import { Sign } from '../sign';

@Component({
  selector: 'app-sign-detail',
  templateUrl: './sign-detail.component.html',
  styleUrls: ['./sign-detail.component.scss']
})
export class SignDetailComponent implements OnInit {
  @Input() sign: Sign;
  

  constructor() { }

  ngOnInit() {
  }

}
