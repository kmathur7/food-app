import { Component, OnInit } from '@angular/core';

import { FaHeaderComponent } from '../../shared/fa-header/fa-header.component';



@Component({
  moduleId: module.id,
  selector: 'app-fa-home',
  templateUrl: 'fa-home.component.html',
  styleUrls: ['fa-home.component.css'],
  directives: [FaHeaderComponent]

})
export class FaHomeComponent implements OnInit {

  lat = 0;
  long = 0;

  locate() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition( position => {
        this.lat= position.coords.latitude;
        this.long = position.coords.longitude;
      });
    } else {
      /* geolocation IS NOT available */
      console.log("Can't seem to be able to locate you! Try again later.")
    }
  }
  constructor() {

  }

  ngOnInit() {
  }

}
