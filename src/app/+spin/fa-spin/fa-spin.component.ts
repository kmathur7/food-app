import { Component, OnInit } from '@angular/core';
import { FaHeaderComponent } from '../../shared/fa-header/fa-header.component';

@Component({
  moduleId: module.id,
  selector: 'app-fa-spin',
  templateUrl: 'fa-spin.component.html',
  styleUrls: ['fa-spin.component.css'],
  directives: [FaHeaderComponent]
})
export class FaSpinComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
