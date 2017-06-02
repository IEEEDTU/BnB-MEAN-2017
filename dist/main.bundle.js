webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 134;


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to Bulls \'n\' Bears - 2018 ';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(201),
        styles: [__webpack_require__(199)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__market_market_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Define the routes
var ROUTES = [
    { path: 'market', component: __WEBPACK_IMPORTED_MODULE_6__market_market_component__["a" /* MarketComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__market_market_component__["a" /* MarketComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES) // Add routes to the app
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarketComponent = (function () {
    function MarketComponent(dataService) {
        this.dataService = dataService;
        this.market = [];
    }
    MarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.fetch()
            .subscribe(function (data) { return _this.market = data; });
        this.dataService.post()
            .subscribe(function (pdata) { return console.log(pdata); });
    };
    return MarketComponent;
}());
MarketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-market',
        template: __webpack_require__(202),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], MarketComponent);

var _a;
//# sourceMappingURL=market.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{title}}\r\n</h1>\r\n\r\n<!--<button a href=\"/auth/facebook\" class=\"btn btn-primary\"> Login </button>-->\r\n<a href=\"/auth/facebook\" class=\"btn btn-primary\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n\r\n<a routerLink=\"/market\" routerLinkActive=\"active\">Market</a>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<h2>Company Listing</h2>\n\n<ul id=\"company-listing\">\n  <li *ngFor=\"let company of market \">\n    <div class=\"single-company\">\n\n      <h3>Id: {{company._id}}</h3><br>\n      <h3>Name: {{company.name}}</h3><br>\n      <h3>Symbol: {{company.symbol}}</h3><br>\n      <h3>Description: {{company.description}}</h3><br>\n      <h3>Annual Growth Rate: {{company.annualGrowthRate}}</h3><br>\n      <h3>MarketCap: {{company.marketCap}}</h3><br>\n      <h3>Supplementary Company: {{company.supplementaryCompany}}</h3><br>\n      <h3>Complementary Company: {{company.complementaryCompany}}</h3><br>\n      <h3>History: {{company.history}}</h3><br>\n      <h3>Total Quantity: {{company.totalQuantity}}</h3><br>\n      <h3>Available Quantity: {{company.availableQuantity}}</h3><br>\n      <h3>Stock Price: {{company.stockPrice}}</h3><br>\n       <!--<h3>Name: {{company.time}}</h3><br>\n        <h3>Name: {{company.milliseconds_since_epoch}}</h3><br>\n         <h3>Name: {{company.Accept-Charset}}</h3><br>\n          <h3>Name: {{company.date}}</h3><br>-->\n          <!--<h3>News Text: {{company.newsText}}</h3><br>\n          <h3>Youtube Src: {{company.youtubeSrc}}</h3><br>\n          <h3>Date: {{company.publishedOn}}</h3><br>\n          <h3>Version: {{company.__v}}</h3><br>\n          <h3>Impact: {{company.newsImpact}}</h3><br>\n          <h3>Published: {{company.isPublished}}</h3><br>-->\n      \n    </div> \n  </li>\n</ul>"

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.fetch = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'access_token': "EAABoUzKDKp0BAHaGQceOPB5F3zI6WBHMdfKPY2HwICVwFOjIh6icdchkPPrGIBxMJxnXQAYC9VvbJjngZCU1Q2IrMOQ3xdfKXMXIQO4ZC6XO1bGpDbnQWdijBQI4LItRC126GY8ZCblgJhRbSlLex0gtyATamB08aCoMtZBfrgZDZD" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://localhost:3000/companylist/', options).map(function (res) { return res.json(); });
    };
    DataService.prototype.post = function () {
        var body = JSON.stringify({ "quantity": 1 });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'access_token': "EAABoUzKDKp0BAHaGQceOPB5F3zI6WBHMdfKPY2HwICVwFOjIh6icdchkPPrGIBxMJxnXQAYC9VvbJjngZCU1Q2IrMOQ3xdfKXMXIQO4ZC6XO1bGpDbnQWdijBQI4LItRC126GY8ZCblgJhRbSlLex0gtyATamB08aCoMtZBfrgZDZD", 'Content-Type': "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/buy/59298b786c0d0b75ea7cbc01', body, options).map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ })

},[471]);
//# sourceMappingURL=main.bundle.js.map