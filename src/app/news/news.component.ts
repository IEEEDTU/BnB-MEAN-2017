import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {GetNewsService} from '../get-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: GetNewsService) { }
  news = [];
  

  ngOnInit() {
         this.newsService.fetchNews()
        .subscribe(
          (data) => this.news = data
        );
  }

}
