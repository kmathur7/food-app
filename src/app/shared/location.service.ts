import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
  getlocation() {
    if ('geolocation' in navigator){
      /* geolocation is available */
      navigator.geolocation
                .getCurrentPosition(
                  position => {
                    return position;
                  },
                  error => {
                    return error;
                  });
                  
    }
    else {
      /* geolocation IS NOT available */
      console.log("Can't seem to be able to locate you! Try again later.")
      return PositionError;
    }
  }

  constructor() {}

}










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