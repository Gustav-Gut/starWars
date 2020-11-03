import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { People } from './interfaces/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {

  constructor(
    public swapiService: SwapiService
  ) {
    console.log('constructor');
  }

  ngAfterContentChecked() {
    console.log('content checked');
  }
  ngOnChanges() {
    console.log('onchanges');
  }
  async ngOnInit() {
    console.log('onInit');
    const peopleSelected = await this.getPeopleById(1);
  }
  ngAfterContentInit() {
    console.log('content init');
  }
  ngAfterViewInit() {
    console.log('view init');
  }
  ngAfterViewChecked() {
    console.log('view checked');
  }
  ngOnDestroy() {
    console.log('destroy');
  }

  getPeopleById(id: number): People {
    let responsePeople: People;
    this.swapiService.getPeopleById(id).subscribe(people => {
      console.log('people returned -->', people);
      responsePeople = people
      console.log('JSON localStorage people -->', JSON.stringify(responsePeople))
      localStorage.setItem('people-selected', JSON.stringify(responsePeople));
      localStorage.setItem('army', JSON.stringify(responsePeople));
      localStorage.setItem('ships', JSON.stringify(responsePeople));
    })
    return responsePeople;
  }

}
