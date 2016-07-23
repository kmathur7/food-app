import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, URLSearchParams, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LocationService } from '../shared/location.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  private latitude;
  private longitude;
  private radius;
  private zomatoUrl = '';  // URL to Zomato
 


  constructor(private http: Http, private locationService: LocationService) {
    this.locationService.getlocation().subscribe((pos: Position) =>{
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    })
    this.radius=1000;
    this.zomatoUrl = 'https://food-express-api.herokuapp.com/search?lat='+this.latitude +'&lon='+this.longitude+'&radius='+this.radius; 
  }
  getRestaurants(): Observable<any> {

    return this.http.get(this.zomatoUrl)
      .map(this.extractData)
      .catch(this.handleError);
      

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


