import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  selector: 'app-fa-header',
  templateUrl: './app/shared/fa-header/fa-header.component.html',
  styleUrls: ['./app/shared/fa-header/fa-header.component.css'],
   directives:[ROUTER_DIRECTIVES,MD_TOOLBAR_DIRECTIVES]
})
export class FaHeaderComponent implements OnInit {
  myColor = 'primary';
  constructor() {}

  ngOnInit() {
  }

}
