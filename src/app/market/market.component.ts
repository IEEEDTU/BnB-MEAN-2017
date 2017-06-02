import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {DataService} from '../data.service';



@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  market = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.dataService.fetch()
        .subscribe(
          (data) => this.market = data
        );

    this.dataService.post()
        .subscribe(
          (pdata) => console.log(pdata)
         );
  }

}
