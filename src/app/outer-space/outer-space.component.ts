import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-outer-space',
  templateUrl: './outer-space.component.html',
  styleUrls: ['./outer-space.component.scss']
})
export class OuterSpaceComponent implements OnInit {

  //variable used to reference values from NASA json 
  picture;

  constructor(private apiService: ApiService) { }

  //getPics() is defined in ApiService
  ngOnInit() {
    this.apiService.getPics().subscribe((data)=>{
    console.log(data);
    this.picture = data;
    });
  }

}
