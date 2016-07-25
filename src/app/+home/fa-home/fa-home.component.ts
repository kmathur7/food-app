import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FaHeaderComponent } from '../../shared/fa-header/fa-header.component';
import { SearchField } from '../search-field';



@Component({
  moduleId: module.id,
  selector: 'app-fa-home',
  templateUrl: 'fa-home.component.html',
  styleUrls: ['fa-home.component.css'],
  directives: [FaHeaderComponent, ROUTER_DIRECTIVES]

})
export class FaHomeComponent implements OnInit {

  model = new SearchField('',0,0);
  submitted=false;
  onSubmit() { this.submitted = true; }
  constructor() {

  }

  ngOnInit() {
  }

}
