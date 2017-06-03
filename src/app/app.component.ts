import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'Welcome to Bulls \'n\' Bears - 2018 ';

  constructor(private _cookieService: CookieService){ }
  getCookie(key: string){
    return this._cookieService.get(key);
  }
}
