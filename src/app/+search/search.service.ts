import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  getRestaurants(url): Observable<any> {
    return this.http.get(url)
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


