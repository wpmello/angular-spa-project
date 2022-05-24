import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shirt } from '../model/shirt';

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  constructor(private httpClient: HttpClient) { }

  apiURL = 'http://localhost:3100/api/courses';

  getBooks(): Observable<Shirt[]> {
    return this.httpClient.get<Shirt[]>(this.apiURL);
  }

  getModelsShirt(): Observable<Shirt[]> {
    return this.httpClient.get<Shirt[]>(this.apiURL);
  }
}
