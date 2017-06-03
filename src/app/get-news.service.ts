import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetNewsService {

  constructor(private http: Http) { }

  fetchNews(){
    
    let headers = new Headers({ 'access_token': "EAABoUzKDKp0BAHaGQceOPB5F3zI6WBHMdfKPY2HwICVwFOjIh6icdchkPPrGIBxMJxnXQAYC9VvbJjngZCU1Q2IrMOQ3xdfKXMXIQO4ZC6XO1bGpDbnQWdijBQI4LItRC126GY8ZCblgJhRbSlLex0gtyATamB08aCoMtZBfrgZDZD" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:3000/companylist/',).map(
          (res) => res.json()
        )  
  }

}
