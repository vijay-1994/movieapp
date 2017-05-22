import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  apiUrl = 'http://www.omdbapi.com/?s=';

  constructor( private http: Http ) { }

  searchMovie(movie: string): Observable<any>
   {
    console.log("service"+movie)
    console.log(this.apiUrl+movie);
    return this.http.get(this.apiUrl+movie).map((res: Response) => 
    {
      //console.log(res.json().Search+"res.json");
       return res.json()['Search'];
    })
    .catch(this.handleError);
  }
 
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


 
}
