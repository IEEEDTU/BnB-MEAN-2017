import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { DataService } from './data.service';



// Define the routes
const ROUTES = [
  { path: 'market', component: MarketComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
