import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '457332fcc9mshc78086a8674c47cp14f6d3jsn17bb78zze0dc';

  constructor(private httpClient: HttpClient) { }
}
