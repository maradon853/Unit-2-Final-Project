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

  ngOnInit() {

    //getPics() is defined in ApiService
    this.apiService.getPics().subscribe((data)=>{

    //full json will be in console
      console.log(data);
      this.picture = data;
    });
  }

}
