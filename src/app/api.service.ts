import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:9000/api'; // Change this URL to match your Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/message`, {responseType: 'text' as 'json'});
  }
}
