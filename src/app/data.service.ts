import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {   }

  fetch(){
   
    let headers = new Headers({ 'access_token': "EAABoUzKDKp0BAHaGQceOPB5F3zI6WBHMdfKPY2HwICVwFOjIh6icdchkPPrGIBxMJxnXQAYC9VvbJjngZCU1Q2IrMOQ3xdfKXMXIQO4ZC6XO1bGpDbnQWdijBQI4LItRC126GY8ZCblgJhRbSlLex0gtyATamB08aCoMtZBfrgZDZD" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:3000/companylist/', options).map(
          (res) => res.json()
        )      
  }

  post(){
    let body = JSON.stringify({"quantity" : 1});
    let headers = new Headers({ 'access_token': "EAABoUzKDKp0BAHaGQceOPB5F3zI6WBHMdfKPY2HwICVwFOjIh6icdchkPPrGIBxMJxnXQAYC9VvbJjngZCU1Q2IrMOQ3xdfKXMXIQO4ZC6XO1bGpDbnQWdijBQI4LItRC126GY8ZCblgJhRbSlLex0gtyATamB08aCoMtZBfrgZDZD",'Content-Type':"application/json"});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/buy/59298b786c0d0b75ea7cbc01', body, options).map(
          (res) => res.json()
        )      
  }

}
