import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private apiUrl = 'http://localhost:3000/posts';
  personData: any;
  contactForm: any;

  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postAllPersons(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  deletePersons(id: number): Observable<any> {
    const abc = `${this.apiUrl}/${id}`;
    return this.http.delete(abc);
  }

  updatePersons(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }

  getById(userId:number){
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
}
