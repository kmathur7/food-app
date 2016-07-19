import { Component, OnInit } from '@angular/core';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { FaHeaderComponent } from '../../shared/fa-header/fa-header.component';



@Component({
  moduleId: module.id,
  selector: 'app-fa-home',
  templateUrl: 'fa-home.component.html',
  styleUrls: ['fa-home.component.css'],
  directives: [FaHeaderComponent,MD_SIDENAV_DIRECTIVES]

})
export class FaHomeComponent implements OnInit {
  start = 'LTR';
  constructor() {

  }

  ngOnInit() {
  }

}
