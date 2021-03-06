import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {
  getlocation():Observable<Object> {
    
   return Observable.create(observer => {
     navigator.geolocation.getCurrentPosition((pos: Position) => {
       observer.next(pos);
     })
   })
  }

  constructor() {}

}







