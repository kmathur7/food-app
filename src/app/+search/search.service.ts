import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, URLSearchParams, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  private options = new RequestOptions({
    search: this.params
  });
  private zomatoUrl = 'https://food-express-api.herokuapp.com/search';  // URL to Zomato
  private params = new URLSearchParams();

  constructor(private http: Http) {
    this.params.set('lat', '40.732013');
    this.params.set('lon', '-73.996155');
    this.params.set('radius', '100');
  }
  getRestaurants(): Observable<any> {

    return this.http.get(this.zomatoUrl, this.options)
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


