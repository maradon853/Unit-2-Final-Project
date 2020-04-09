import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//NASA API Key:
  API_KEY = 'r8zWj49xP9PMNbySl2fd924fSvZeTtGM1HcVbyq2';

  url = `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`

  constructor(private httpClient: HttpClient) { }

  public getPics() {
    const pics = this.httpClient.get(this.url);
    return pics;
  }
}
