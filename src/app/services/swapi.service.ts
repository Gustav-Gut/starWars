import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apis } from '../../environments/environment';
import { People } from '../components/core/people/interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getPeople(id: number) {
    return this.http.get<People[]>(apis.apiPeople+'/'+id, this.httpOptions);
  }


}
