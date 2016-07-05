import { Component, OnInit, Input } from '@angular/core';
import { FaRestaurantComponent } from '../fa-restaurant/fa-restaurant.component';

@Component({
  moduleId: module.id,
  selector: 'app-fa-list',
  templateUrl: 'fa-list.component.html',
  styleUrls: ['fa-list.component.css'],
  directives: [FaRestaurantComponent]
})
export class FaListComponent implements OnInit {
  @Input() restaurants: any[];
  constructor() { }

  ngOnInit() {
  }

}
