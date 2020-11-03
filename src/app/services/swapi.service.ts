import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apis } from '../../environments/environment';
import { People } from '../components/core/people/interfaces/people';
import { Planet } from '../components/core/planets/interfaces/planet';
import { Starship } from '../components/core/starships/interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getPeopleById(id: number) {
    console.log('call swapi people-->', apis)
    return this.http.get<People>(apis.apiPeople+'/'+id);
  }

  getPlanetById(id: number) {
    console.log('call swapi planet-->', apis)
    return this.http.get<Planet>(apis.apiPlanets+'/'+id);
  }

  getStarshipById(id: number) {
    console.log('call swapi starship-->', apis)
    return this.http.get<Starship>(apis.apiStarships+'/'+id);
  }


}
