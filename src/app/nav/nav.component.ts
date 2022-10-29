import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faMicrophone, faVideoCamera, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch;
  faMicrophone = faMicrophone;
  faVideoCamera = faVideoCamera;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
