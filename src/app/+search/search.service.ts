import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, URLSearchParams, Jsonp, Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
  private authHeader = new Headers({ "Content-Type": "application/json" });
  private options = new RequestOptions({
    headers: this.authHeader,
    search: this.params
  });
  private zomatoUrl = 'https://developers.zomato.com/api/v2.1/search';  // URL to Zomato
  private params = new URLSearchParams();

  constructor(private jsonp: Jsonp) {
    this.authHeader.append('user-key', '300a387c4eca4461fb5c7a2e3b3a6265');
    this.params.set('lat', '40.732013');
    this.params.set('lon', '-73.996155');
    this.params.set('radius', '100');
  }
  getRestaurants(): Observable<any[]> {

    return this.jsonp.get(this.zomatoUrl, this.options)
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


