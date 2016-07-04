import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'app-fa-header',
  templateUrl: './app/shared/fa-header/fa-header.component.html',
  styleUrls: ['./app/shared/fa-header/fa-header.component.css'],
   directives:[ROUTER_DIRECTIVES]
})
export class FaHeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
