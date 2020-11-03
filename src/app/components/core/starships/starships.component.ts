import { Component, OnInit } from '@angular/core';
import { People } from '../people/interfaces/people';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const localPeople: People = JSON.parse(localStorage.getItem('people-selected'));
    console.log('localStorage ps -->', localPeople.name);
    console.log('local by key -->',localStorage.key(0));
  }

}
