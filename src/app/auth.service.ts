import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

    url='http://localhost:8000/api/user';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  login(data:any){

    

     return this.http.post<any>(`${this.url}/login`, data, this.httpOptions);

  }

  getData(){

    return this.http.get(`${this.url}/details`, this.httpOptions);
  }

  

}
