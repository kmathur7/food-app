import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-fa-restaurant',
  templateUrl: 'fa-restaurant.component.html',
  styleUrls: ['fa-restaurant.component.css']
})
export class FaRestaurantComponent implements OnInit {
  @Input() restaurantData
  constructor() { }

  ngOnInit() {
    
  }

}
