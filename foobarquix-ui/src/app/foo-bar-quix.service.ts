import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private http: HttpClient) { }

  getFooBarQuix(inputNumber: number) {
    return this.http.get("http://localhost:8080" + "/foo-bar-quix/" + inputNumber);
  }
  
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
  }

}
