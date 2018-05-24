(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout-1/layout-1.component */ "./src/app/layout/layout-1/layout-1.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_2_page_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-2/page-2.component */ "./src/app/page-2/page-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// *******************************************************************************
// Layouts

// *******************************************************************************
// Pages


// *******************************************************************************
// Routes
var routes = [
    { path: '', component: _layout_layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_2__["Layout1Component"], pathMatch: 'full', children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
        ] },
    { path: 'page-2', component: _layout_layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_2__["Layout1Component"], children: [
            { path: '', component: _page_2_page_2_component__WEBPACK_IMPORTED_MODULE_4__["Page2Component"] },
        ] }
];
// *******************************************************************************
//
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, layoutService) {
        this.router = router;
        this.layoutService = layoutService;
        // Subscribe to router events to handle page transition
        this.router.events.subscribe(this.navigationInterceptor.bind(this));
        // Disable animations and transitions in IE10 to increase performance
        if (typeof document['documentMode'] === 'number' && document['documentMode'] < 11) {
            var style = document.createElement('style');
            style.textContent = '* { -ms-animation: none !important; animation: none !important; -ms-transition: none !important; transition: none !important; }';
            document.head.appendChild(style);
        }
    }
    AppComponent.prototype.navigationInterceptor = function (e) {
        var _this = this;
        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            // Set loading state
            document.body.classList.add('app-loading');
        }
        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            // On small screens collapse sidenav
            if (this.layoutService.isSmallScreen() && !this.layoutService.isCollapsed()) {
                setTimeout(function () { return _this.layoutService.setCollapsed(true, true); }, 10);
            }
            // Remove loading state
            document.body.classList.remove('app-loading');
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [':host { display: block; }']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _layout_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_2_page_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-2/page-2.component */ "./src/app/page-2/page-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// *******************************************************************************
// NgBootstrap

// *******************************************************************************
// App




// *******************************************************************************
// Pages


// *******************************************************************************
//
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                // Pages
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_2_page_2_component__WEBPACK_IMPORTED_MODULE_8__["Page2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                // App
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(titleService) {
        this.titleService = titleService;
    }
    Object.defineProperty(AppService.prototype, "pageTitle", {
        // Set page title
        set: function (value) {
            this.titleService.setTitle(value + " - Angular Starter");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "isRTL", {
        // Check for RTL layout
        get: function () {
            return document.documentElement.getAttribute('dir') === 'rtl' ||
                document.body.getAttribute('dir') === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "isIE10", {
        // Check if IE10
        get: function () {
            return typeof document['documentMode'] === 'number' && document['documentMode'] === 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "layoutNavbarBg", {
        // Layout navbar color
        get: function () {
            return 'navbar-theme';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "layoutSidenavBg", {
        // Layout sidenav color
        get: function () {
            return 'sidenav-theme';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "layoutFooterBg", {
        // Layout footer color
        get: function () {
            return 'footer-theme';
        },
        enumerable: true,
        configurable: true
    });
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"font-weight-bold py-3 mb-4\">Home</h4>\n<p>This page is an example of basic layout. For more options use <strong>Angular starter template generator</strong> in the docs.</p>\n<p><button class=\"btn btn-primary btn-lg\">Button</button></p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService) {
        this.appService = appService;
        this.appService.pageTitle = 'Home';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-1-flex/layout-1-flex.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-1-flex/layout-1-flex.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <app-layout-navbar></app-layout-navbar>\n\n    <div class=\"layout-container\">\n      <app-layout-sidenav></app-layout-sidenav>\n\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions d-flex align-items-stretch flex-grow-1 p-0\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\n"

/***/ }),

/***/ "./src/app/layout/layout-1-flex/layout-1-flex.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-1-flex/layout-1-flex.component.ts ***!
  \*****************************************************************/
/*! exports provided: Layout1FlexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout1FlexComponent", function() { return Layout1FlexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Layout1FlexComponent = /** @class */ (function () {
    function Layout1FlexComponent(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    Layout1FlexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    Layout1FlexComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    Layout1FlexComponent.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    Layout1FlexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-1-flex',
            template: __webpack_require__(/*! ./layout-1-flex.component.html */ "./src/app/layout/layout-1-flex/layout-1-flex.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], Layout1FlexComponent);
    return Layout1FlexComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-1/layout-1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/layout-1/layout-1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <app-layout-navbar></app-layout-navbar>\n\n    <div class=\"layout-container\">\n      <app-layout-sidenav></app-layout-sidenav>\n\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\n"

/***/ }),

/***/ "./src/app/layout/layout-1/layout-1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/layout-1/layout-1.component.ts ***!
  \*******************************************************/
/*! exports provided: Layout1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout1Component", function() { return Layout1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Layout1Component = /** @class */ (function () {
    function Layout1Component(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    Layout1Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    Layout1Component.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    Layout1Component.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    Layout1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-1',
            template: __webpack_require__(/*! ./layout-1.component.html */ "./src/app/layout/layout-1/layout-1.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], Layout1Component);
    return Layout1Component;
}());



/***/ }),

/***/ "./src/app/layout/layout-2-flex/layout-2-flex.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-2-flex/layout-2-flex.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-2\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <app-layout-sidenav></app-layout-sidenav>\n\n    <div class=\"layout-container\">\n      <app-layout-navbar></app-layout-navbar>\n\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions d-flex align-items-stretch flex-grow-1 p-0\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\n"

/***/ }),

/***/ "./src/app/layout/layout-2-flex/layout-2-flex.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-2-flex/layout-2-flex.component.ts ***!
  \*****************************************************************/
/*! exports provided: Layout2FlexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout2FlexComponent", function() { return Layout2FlexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Layout2FlexComponent = /** @class */ (function () {
    function Layout2FlexComponent(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    Layout2FlexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    Layout2FlexComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    Layout2FlexComponent.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    Layout2FlexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-2-flex',
            template: __webpack_require__(/*! ./layout-2-flex.component.html */ "./src/app/layout/layout-2-flex/layout-2-flex.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], Layout2FlexComponent);
    return Layout2FlexComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-2/layout-2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/layout-2/layout-2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-2\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <app-layout-sidenav></app-layout-sidenav>\n\n    <div class=\"layout-container\">\n      <app-layout-navbar></app-layout-navbar>\n\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\n"

/***/ }),

/***/ "./src/app/layout/layout-2/layout-2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/layout-2/layout-2.component.ts ***!
  \*******************************************************/
/*! exports provided: Layout2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout2Component", function() { return Layout2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Layout2Component = /** @class */ (function () {
    function Layout2Component(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    Layout2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    Layout2Component.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    Layout2Component.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    Layout2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-2',
            template: __webpack_require__(/*! ./layout-2.component.html */ "./src/app/layout/layout-2/layout-2.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], Layout2Component);
    return Layout2Component;
}());



/***/ }),

/***/ "./src/app/layout/layout-blank/layout-blank.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-blank/layout-blank.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"router-transitions\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout-blank/layout-blank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/layout-blank/layout-blank.component.ts ***!
  \***************************************************************/
/*! exports provided: LayoutBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBlankComponent", function() { return LayoutBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutBlankComponent = /** @class */ (function () {
    function LayoutBlankComponent() {
    }
    LayoutBlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-blank',
            template: __webpack_require__(/*! ./layout-blank.component.html */ "./src/app/layout/layout-blank/layout-blank.component.html"),
            styles: [':host { display: block; }']
        })
    ], LayoutBlankComponent);
    return LayoutBlankComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-footer/layout-footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-footer/layout-footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"footer\" [ngClass]=\"currentBg()\">\n  <div class=\"container-fluid container-p-x pb-3\">\n    <a href=\"#\" class=\"footer-link pt-3\">Link 1</a>\n    <a href=\"#\" class=\"footer-link pt-3 ml-4\">Link 2</a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/layout-footer/layout-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-footer/layout-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFooterComponent", function() { return LayoutFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutFooterComponent = /** @class */ (function () {
    function LayoutFooterComponent(appService) {
        this.appService = appService;
    }
    LayoutFooterComponent.prototype.currentBg = function () {
        return "bg-" + this.appService.layoutFooterBg;
    };
    LayoutFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-footer',
            template: __webpack_require__(/*! ./layout-footer.component.html */ "./src/app/layout/layout-footer/layout-footer.component.html"),
            styles: [':host { display: block; }'],
            host: { '[class.layout-footer]': 'true' }
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], LayoutFooterComponent);
    return LayoutFooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1 layout-without-sidenav\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <app-layout-navbar [sidenavToggle]=\"false\"></app-layout-navbar>\n\n    <div class=\"layout-container\">\n      <div class=\"layout-content\">\n        <app-layout-sidenav orientation=\"horizontal\"></app-layout-sidenav>\n\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LayoutHorizontalSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHorizontalSidenavComponent", function() { return LayoutHorizontalSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutHorizontalSidenavComponent = /** @class */ (function () {
    function LayoutHorizontalSidenavComponent(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    LayoutHorizontalSidenavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            // Enshure that we have not '.layout-expanded' class on the html element
            _this.layoutService._removeClass('layout-expanded');
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    LayoutHorizontalSidenavComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    LayoutHorizontalSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-horizontal-sidenav',
            template: __webpack_require__(/*! ./layout-horizontal-sidenav.component.html */ "./src/app/layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], LayoutHorizontalSidenavComponent);
    return LayoutHorizontalSidenavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-navbar/layout-navbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-navbar/layout-navbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg align-items-lg-center container-p-x\" [ngClass]=\"currentBg()\">\n\n  <!-- Brand -->\n  <a routerLink=\"/\" class=\"navbar-brand\">Angular Starter</a>\n\n  <!-- Sidenav toggle -->\n  <div class=\"navbar-nav align-items-lg-center mr-auto mr-lg-4\" *ngIf=\"sidenavToggle\">\n    <a class=\"nav-item nav-link px-0 ml-2\" href=\"javascript:void(0)\" (click)=\"toggleSidenav()\">\n      <i class=\"ion ion-md-menu text-large align-middle\"></i>\n    </a>\n  </div>\n\n  <!-- Navbar toggle -->\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isExpanded = !isExpanded\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse collapse\" [ngbCollapse]=\"!isExpanded\">\n    <div class=\"navbar-nav align-items-lg-center\">\n      <div class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Link 1</a></div>\n      <div class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Link 2</a></div>\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/layout-navbar/layout-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-navbar/layout-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutNavbarComponent", function() { return LayoutNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutNavbarComponent = /** @class */ (function () {
    function LayoutNavbarComponent(appService, layoutService) {
        this.appService = appService;
        this.layoutService = layoutService;
        this.isExpanded = false;
        this.sidenavToggle = true;
        this.isRTL = appService.isRTL;
    }
    LayoutNavbarComponent.prototype.currentBg = function () {
        return "bg-" + this.appService.layoutNavbarBg;
    };
    LayoutNavbarComponent.prototype.toggleSidenav = function () {
        this.layoutService.toggleCollapsed();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LayoutNavbarComponent.prototype, "sidenavToggle", void 0);
    LayoutNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-navbar',
            template: __webpack_require__(/*! ./layout-navbar.component.html */ "./src/app/layout/layout-navbar/layout-navbar.component.html"),
            styles: [':host { display: block; }'],
            host: { '[class.layout-navbar]': 'true' }
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _layout_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], LayoutNavbarComponent);
    return LayoutNavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-sidenav/layout-sidenav.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/layout-sidenav/layout-sidenav.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sidenav [orientation]=\"orientation\" [ngClass]=\"getClasses()\">\n\n  <!-- Inner -->\n  <div class=\"sidenav-inner\" [ngClass]=\"{ 'py-1': orientation !== 'horizontal' }\">\n\n    <sidenav-router-link icon=\"ion ion-ios-contact\" route=\"/\" [active]=\"isActive('/')\">Home</sidenav-router-link>\n    <sidenav-router-link icon=\"ion ion-md-desktop\" route=\"/page-2\" [active]=\"isActive('/page-2')\">Page 2</sidenav-router-link>\n\n  </div>\n</sidenav>\n"

/***/ }),

/***/ "./src/app/layout/layout-sidenav/layout-sidenav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/layout-sidenav/layout-sidenav.component.ts ***!
  \*******************************************************************/
/*! exports provided: LayoutSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSidenavComponent", function() { return LayoutSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutSidenavComponent = /** @class */ (function () {
    function LayoutSidenavComponent(router, appService, layoutService) {
        this.router = router;
        this.appService = appService;
        this.layoutService = layoutService;
        this.orientation = 'vertical';
    }
    LayoutSidenavComponent.prototype.ngAfterViewInit = function () {
        // Safari bugfix
        this.layoutService._redrawLayoutSidenav();
    };
    LayoutSidenavComponent.prototype.getClasses = function () {
        var bg = this.appService.layoutSidenavBg;
        if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
            bg = bg
                .replace(' sidenav-dark', '')
                .replace(' sidenav-light', '')
                .replace('-darker', '')
                .replace('-dark', '');
        }
        return (this.orientation === 'horizontal' ? 'container-p-x ' : '') + " bg-" + bg;
    };
    LayoutSidenavComponent.prototype.isActive = function (url) {
        return this.router.isActive(url, true);
    };
    LayoutSidenavComponent.prototype.isMenuActive = function (url) {
        return this.router.isActive(url, false);
    };
    LayoutSidenavComponent.prototype.isMenuOpen = function (url) {
        return this.router.isActive(url, false) && this.orientation !== 'horizontal';
    };
    LayoutSidenavComponent.prototype.toggleSidenav = function () {
        this.layoutService.toggleCollapsed();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LayoutSidenavComponent.prototype, "orientation", void 0);
    LayoutSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-sidenav',
            template: __webpack_require__(/*! ./layout-sidenav.component.html */ "./src/app/layout/layout-sidenav/layout-sidenav.component.html"),
            styles: [':host { display: block; }'],
            host: {
                '[class.layout-sidenav]': 'orientation !== "horizontal"',
                '[class.layout-sidenav-horizontal]': 'orientation === "horizontal"',
                '[class.flex-grow-0]': 'orientation === "horizontal"'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], LayoutSidenavComponent);
    return LayoutSidenavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-without-navbar-flex/layout-without-navbar-flex.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/layout-without-navbar-flex/layout-without-navbar-flex.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <div class=\"layout-container\">\n      <app-layout-sidenav></app-layout-sidenav>\n\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions d-flex align-items-stretch flex-grow-1 p-0\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\n"

/***/ }),

/***/ "./src/app/layout/layout-without-navbar-flex/layout-without-navbar-flex.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/layout-without-navbar-flex/layout-without-navbar-flex.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LayoutWithoutNavbarFlexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWithoutNavbarFlexComponent", function() { return LayoutWithoutNavbarFlexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutWithoutNavbarFlexComponent = /** @class */ (function () {
    function LayoutWithoutNavbarFlexComponent(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    LayoutWithoutNavbarFlexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    LayoutWithoutNavbarFlexComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    LayoutWithoutNavbarFlexComponent.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    LayoutWithoutNavbarFlexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-without-navbar-flex',
            template: __webpack_require__(/*! ./layout-without-navbar-flex.component.html */ "./src/app/layout/layout-without-navbar-flex/layout-without-navbar-flex.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], LayoutWithoutNavbarFlexComponent);
    return LayoutWithoutNavbarFlexComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-without-navbar/layout-without-navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/layout-without-navbar/layout-without-navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <div class=\"layout-container\">\n      <app-layout-sidenav></app-layout-sidenav>\n\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"layout-overlay\" (click)=\"closeSidenav()\"></div>\n"

/***/ }),

/***/ "./src/app/layout/layout-without-navbar/layout-without-navbar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/layout-without-navbar/layout-without-navbar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LayoutWithoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWithoutNavbarComponent", function() { return LayoutWithoutNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutWithoutNavbarComponent = /** @class */ (function () {
    function LayoutWithoutNavbarComponent(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    LayoutWithoutNavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    LayoutWithoutNavbarComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    LayoutWithoutNavbarComponent.prototype.closeSidenav = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.setCollapsed(true);
        });
    };
    LayoutWithoutNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-without-navbar',
            template: __webpack_require__(/*! ./layout-without-navbar.component.html */ "./src/app/layout/layout-without-navbar/layout-without-navbar.component.html"),
            styles: [':host { display: block; }', ':host /deep/ .layout-loading .sidenav-link { transition: none !important; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], LayoutWithoutNavbarComponent);
    return LayoutWithoutNavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-without-sidenav/layout-without-sidenav.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/layout-without-sidenav/layout-without-sidenav.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper layout-1 layout-without-sidenav\" [ngClass]=\"{'layout-loading': !initialized}\">\n  <div class=\"layout-inner\">\n    <app-layout-navbar [sidenavToggle]=\"false\"></app-layout-navbar>\n\n    <div class=\"layout-container\">\n      <div class=\"layout-content\">\n        <div class=\"container-fluid router-transitions flex-grow-1 container-p-y\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <app-layout-footer></app-layout-footer>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout-without-sidenav/layout-without-sidenav.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/layout-without-sidenav/layout-without-sidenav.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LayoutWithoutSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutWithoutSidenavComponent", function() { return LayoutWithoutSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutWithoutSidenavComponent = /** @class */ (function () {
    function LayoutWithoutSidenavComponent(layoutService) {
        this.layoutService = layoutService;
        // Prevent "blink" effect
        this.initialized = false;
    }
    LayoutWithoutSidenavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initialized = true;
            // Enshure that we have not '.layout-expanded' class on the html element
            _this.layoutService._removeClass('layout-expanded');
            _this.layoutService.init();
            _this.layoutService.update();
            _this.layoutService.setAutoUpdate(true);
        });
    };
    LayoutWithoutSidenavComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layoutService.destroy();
        });
    };
    LayoutWithoutSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-without-sidenav',
            template: __webpack_require__(/*! ./layout-without-sidenav.component.html */ "./src/app/layout/layout-without-sidenav/layout-without-sidenav.component.html"),
            styles: [':host { display: block; }']
        }),
        __metadata("design:paramtypes", [_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], LayoutWithoutSidenavComponent);
    return LayoutWithoutSidenavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-1/layout-1.component */ "./src/app/layout/layout-1/layout-1.component.ts");
/* harmony import */ var _layout_1_flex_layout_1_flex_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-1-flex/layout-1-flex.component */ "./src/app/layout/layout-1-flex/layout-1-flex.component.ts");
/* harmony import */ var _layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-2/layout-2.component */ "./src/app/layout/layout-2/layout-2.component.ts");
/* harmony import */ var _layout_2_flex_layout_2_flex_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-2-flex/layout-2-flex.component */ "./src/app/layout/layout-2-flex/layout-2-flex.component.ts");
/* harmony import */ var _layout_without_navbar_layout_without_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-without-navbar/layout-without-navbar.component */ "./src/app/layout/layout-without-navbar/layout-without-navbar.component.ts");
/* harmony import */ var _layout_without_navbar_flex_layout_without_navbar_flex_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout-without-navbar-flex/layout-without-navbar-flex.component */ "./src/app/layout/layout-without-navbar-flex/layout-without-navbar-flex.component.ts");
/* harmony import */ var _layout_without_sidenav_layout_without_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout-without-sidenav/layout-without-sidenav.component */ "./src/app/layout/layout-without-sidenav/layout-without-sidenav.component.ts");
/* harmony import */ var _layout_horizontal_sidenav_layout_horizontal_sidenav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout-horizontal-sidenav/layout-horizontal-sidenav.component */ "./src/app/layout/layout-horizontal-sidenav/layout-horizontal-sidenav.component.ts");
/* harmony import */ var _layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout-blank/layout-blank.component */ "./src/app/layout/layout-blank/layout-blank.component.ts");
/* harmony import */ var _layout_navbar_layout_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout-navbar/layout-navbar.component */ "./src/app/layout/layout-navbar/layout-navbar.component.ts");
/* harmony import */ var _layout_sidenav_layout_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout-sidenav/layout-sidenav.component */ "./src/app/layout/layout-sidenav/layout-sidenav.component.ts");
/* harmony import */ var _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout-footer/layout-footer.component */ "./src/app/layout/layout-footer/layout-footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _vendor_libs_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../vendor/libs/sidenav/sidenav.module */ "./src/vendor/libs/sidenav/sidenav.module.ts");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout.service */ "./src/app/layout/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// *******************************************************************************
// Layouts









// *******************************************************************************
// Components



// *******************************************************************************
// Libs


// *******************************************************************************
// Service

// *******************************************************************************
//
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _vendor_libs_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_16__["SidenavModule"]
            ],
            declarations: [
                _layout_1_layout_1_component__WEBPACK_IMPORTED_MODULE_3__["Layout1Component"],
                _layout_1_flex_layout_1_flex_component__WEBPACK_IMPORTED_MODULE_4__["Layout1FlexComponent"],
                _layout_2_layout_2_component__WEBPACK_IMPORTED_MODULE_5__["Layout2Component"],
                _layout_2_flex_layout_2_flex_component__WEBPACK_IMPORTED_MODULE_6__["Layout2FlexComponent"],
                _layout_without_navbar_layout_without_navbar_component__WEBPACK_IMPORTED_MODULE_7__["LayoutWithoutNavbarComponent"],
                _layout_without_navbar_flex_layout_without_navbar_flex_component__WEBPACK_IMPORTED_MODULE_8__["LayoutWithoutNavbarFlexComponent"],
                _layout_without_sidenav_layout_without_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["LayoutWithoutSidenavComponent"],
                _layout_horizontal_sidenav_layout_horizontal_sidenav_component__WEBPACK_IMPORTED_MODULE_10__["LayoutHorizontalSidenavComponent"],
                _layout_blank_layout_blank_component__WEBPACK_IMPORTED_MODULE_11__["LayoutBlankComponent"],
                _layout_navbar_layout_navbar_component__WEBPACK_IMPORTED_MODULE_12__["LayoutNavbarComponent"],
                _layout_sidenav_layout_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["LayoutSidenavComponent"],
                _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_14__["LayoutFooterComponent"]
            ],
            providers: [
                _layout_service__WEBPACK_IMPORTED_MODULE_17__["LayoutService"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.service.ts":
/*!******************************************!*\
  !*** ./src/app/layout/layout.service.ts ***!
  \******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutService = /** @class */ (function () {
    function LayoutService(zone) {
        this.zone = zone;
    }
    LayoutService.prototype.exec = function (fn) {
        return window['layoutHelpers'] && this.zone.runOutsideAngular(fn);
    };
    LayoutService.prototype.getLayoutSidenav = function () {
        return this.exec(function () { return window['layoutHelpers'].getLayoutSidenav(); }) || null;
    };
    LayoutService.prototype.getSidenav = function () {
        return this.exec(function () { return window['layoutHelpers'].getSidenav(); }) || null;
    };
    LayoutService.prototype.getLayoutNavbar = function () {
        return this.exec(function () { return window['layoutHelpers'].getLayoutNavbar(); }) || null;
    };
    LayoutService.prototype.getLayoutContainer = function () {
        return this.exec(function () { return window['layoutHelpers'].getLayoutContainer(); }) || null;
    };
    LayoutService.prototype.isSmallScreen = function () {
        return this.exec(function () { return window['layoutHelpers'].isSmallScreen(); });
    };
    LayoutService.prototype.isLayout1 = function () {
        return this.exec(function () { return window['layoutHelpers'].isLayout1(); });
    };
    LayoutService.prototype.isCollapsed = function () {
        return this.exec(function () { return window['layoutHelpers'].isCollapsed(); });
    };
    LayoutService.prototype.isFixed = function () {
        return this.exec(function () { return window['layoutHelpers'].isFixed(); });
    };
    LayoutService.prototype.isOffcanvas = function () {
        return this.exec(function () { return window['layoutHelpers'].isOffcanvas(); });
    };
    LayoutService.prototype.isNavbarFixed = function () {
        return this.exec(function () { return window['layoutHelpers'].isNavbarFixed(); });
    };
    LayoutService.prototype.isReversed = function () {
        return this.exec(function () { return window['layoutHelpers'].isReversed(); });
    };
    LayoutService.prototype.setCollapsed = function (collapsed, animate) {
        if (animate === void 0) { animate = true; }
        this.exec(function () { return window['layoutHelpers'].setCollapsed(collapsed, animate); });
    };
    LayoutService.prototype.toggleCollapsed = function (animate) {
        if (animate === void 0) { animate = true; }
        this.exec(function () { return window['layoutHelpers'].toggleCollapsed(animate); });
    };
    LayoutService.prototype.setPosition = function (fixed, offcanvas) {
        this.exec(function () { return window['layoutHelpers'].setPosition(fixed, offcanvas); });
    };
    LayoutService.prototype.setNavbarFixed = function (fixed) {
        this.exec(function () { return window['layoutHelpers'].setNavbarFixed(fixed); });
    };
    LayoutService.prototype.setReversed = function (reversed) {
        this.exec(function () { return window['layoutHelpers'].setReversed(reversed); });
    };
    LayoutService.prototype.update = function () {
        this.exec(function () { return window['layoutHelpers'].update(); });
    };
    LayoutService.prototype.setAutoUpdate = function (enable) {
        this.exec(function () { return window['layoutHelpers'].setAutoUpdate(enable); });
    };
    LayoutService.prototype.on = function (event, callback) {
        this.exec(function () { return window['layoutHelpers'].on(event, callback); });
    };
    LayoutService.prototype.off = function (event) {
        this.exec(function () { return window['layoutHelpers'].off(event); });
    };
    LayoutService.prototype.init = function () {
        this.exec(function () { return window['layoutHelpers'].init(); });
    };
    LayoutService.prototype.destroy = function () {
        this.exec(function () { return window['layoutHelpers'].destroy(); });
    };
    // Internal
    //
    LayoutService.prototype._redrawLayoutSidenav = function () {
        this.exec(function () { return window['layoutHelpers']._redrawLayoutSidenav(); });
    };
    LayoutService.prototype._removeClass = function (cls) {
        this.exec(function () { return window['layoutHelpers']._removeClass(cls); });
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/page-2/page-2.component.html":
/*!**********************************************!*\
  !*** ./src/app/page-2/page-2.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"font-weight-bold py-3 mb-4\">Page 2</h4>\n<p>This page is an example of basic layout. For more options use <strong>Angular starter template generator</strong> in the docs.</p>\n<p><button class=\"btn btn-primary btn-lg\">Button</button></p>\n"

/***/ }),

/***/ "./src/app/page-2/page-2.component.ts":
/*!********************************************!*\
  !*** ./src/app/page-2/page-2.component.ts ***!
  \********************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2Component = /** @class */ (function () {
    function Page2Component(appService) {
        this.appService = appService;
        this.appService.pageTitle = 'Page 2';
    }
    Page2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-2',
            template: __webpack_require__(/*! ./page-2.component.html */ "./src/app/page-2/page-2.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss":
/*!**************************************************************************!*\
  !*** ./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ {\n  /*\n * Container style\n */\n  /*\n * Scrollbar rail styles\n */\n  /*\n * Scrollbar thumb styles\n */\n  /* MS supports */ }\n  :host /deep/ .ps {\n    overflow: hidden !important;\n    overflow-anchor: none;\n    -ms-overflow-style: none;\n    touch-action: auto;\n    -ms-touch-action: auto; }\n  :host /deep/ .ps__rail-x {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    height: 15px;\n    /* there must be 'bottom' or 'top' for ps__rail-x */\n    bottom: 0px;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps__rail-y {\n    display: none;\n    opacity: 0;\n    transition: background-color .2s linear, opacity .2s linear;\n    -webkit-transition: background-color .2s linear, opacity .2s linear;\n    width: 15px;\n    /* there must be 'right' or 'left' for ps__rail-y */\n    right: 0;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps--active-x > .ps__rail-x,\n  :host /deep/ .ps--active-y > .ps__rail-y {\n    display: block;\n    background-color: transparent; }\n  :host /deep/ .ps:hover > .ps__rail-x,\n  :host /deep/ .ps:hover > .ps__rail-y,\n  :host /deep/ .ps--focus > .ps__rail-x,\n  :host /deep/ .ps--focus > .ps__rail-y,\n  :host /deep/ .ps--scrolling-x > .ps__rail-x,\n  :host /deep/ .ps--scrolling-y > .ps__rail-y {\n    opacity: 0.6; }\n  :host /deep/ .ps__rail-x:hover,\n  :host /deep/ .ps__rail-y:hover,\n  :host /deep/ .ps__rail-x:focus,\n  :host /deep/ .ps__rail-y:focus {\n    background-color: #eee;\n    opacity: 0.9; }\n  :host /deep/ .ps__thumb-x {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, height .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n    height: 6px;\n    /* there must be 'bottom' for ps__thumb-x */\n    bottom: 2px;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps__thumb-y {\n    background-color: #aaa;\n    border-radius: 6px;\n    transition: background-color .2s linear, width .2s ease-in-out;\n    -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n    width: 6px;\n    /* there must be 'right' for ps__thumb-y */\n    right: 2px;\n    /* please don't change 'position' */\n    position: absolute; }\n  :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n  :host /deep/ .ps__rail-x:focus > .ps__thumb-x {\n    background-color: #999;\n    height: 11px; }\n  :host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n  :host /deep/ .ps__rail-y:focus > .ps__thumb-y {\n    background-color: #999;\n    width: 11px; }\n  @supports (-ms-overflow-style: none) {\n    :host /deep/ .ps {\n      overflow: auto !important; } }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    :host /deep/ .ps {\n      overflow: auto !important; } }\n  :host /deep/ .ps {\n  position: relative; }\n  :host /deep/ .ps__rail-x,\n:host /deep/ .ps__rail-y,\n:host /deep/ .ps__thumb-x,\n:host /deep/ .ps__thumb-y {\n  border-radius: 10rem; }\n  :host /deep/ .ps__rail-x {\n  height: 0.25rem; }\n  :host /deep/ .ps__rail-y {\n  width: 0.25rem; }\n  :host /deep/ .ps__thumb-x {\n  bottom: 0;\n  height: 0.25rem; }\n  :host /deep/ .ps__thumb-y {\n  right: 0;\n  width: 0.25rem; }\n  :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n:host /deep/ .ps__rail-x:focus > .ps__thumb-x {\n  height: 0.375rem; }\n  :host /deep/ .ps__rail-y:hover,\n:host /deep/ .ps__rail-y:focus,\n:host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n:host /deep/ .ps__rail-y:focus > .ps__thumb-y {\n  width: 0.375rem; }\n  .default-style :host /deep/ .ps__rail-x:hover,\n.default-style :host /deep/ .ps__rail-y:hover,\n.default-style :host /deep/ .ps__rail-x:focus,\n.default-style :host /deep/ .ps__rail-y:focus {\n  background-color: rgba(24, 28, 33, 0.1); }\n  .default-style :host /deep/ .ps__thumb-x,\n.default-style :host /deep/ .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.3); }\n  .default-style :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n.default-style :host /deep/ .ps__rail-x:focus > .ps__thumb-x,\n.default-style :host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n.default-style :host /deep/ .ps__rail-y:focus > .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.6); }\n  .default-style :host /deep/ .ps-inverted .ps__rail-x:hover,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:hover,\n.default-style :host /deep/ .ps-inverted .ps__rail-x:focus,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:focus {\n  background-color: rgba(255, 255, 255, 0.5); }\n  .default-style :host /deep/ .ps-inverted .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__thumb-y {\n  background-color: rgba(255, 255, 255, 0.7); }\n  .default-style :host /deep/ .ps-inverted .ps__rail-x:hover > .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__rail-x:focus > .ps__thumb-x,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:hover > .ps__thumb-y,\n.default-style :host /deep/ .ps-inverted .ps__rail-y:focus > .ps__thumb-y {\n  background-color: #fff; }\n  .material-style :host /deep/ .ps__rail-x:hover,\n.material-style :host /deep/ .ps__rail-y:hover,\n.material-style :host /deep/ .ps__rail-x:focus,\n.material-style :host /deep/ .ps__rail-y:focus {\n  background-color: rgba(24, 28, 33, 0.1); }\n  .material-style :host /deep/ .ps__thumb-x,\n.material-style :host /deep/ .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.4); }\n  .material-style :host /deep/ .ps__rail-x:hover > .ps__thumb-x,\n.material-style :host /deep/ .ps__rail-x:focus > .ps__thumb-x,\n.material-style :host /deep/ .ps__rail-y:hover > .ps__thumb-y,\n.material-style :host /deep/ .ps__rail-y:focus > .ps__thumb-y {\n  background-color: rgba(24, 28, 33, 0.6); }\n  .material-style :host /deep/ .ps-inverted .ps__rail-x:hover,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:hover,\n.material-style :host /deep/ .ps-inverted .ps__rail-x:focus,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:focus {\n  background-color: rgba(255, 255, 255, 0.5); }\n  .material-style :host /deep/ .ps-inverted .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__thumb-y {\n  background-color: rgba(255, 255, 255, 0.7); }\n  .material-style :host /deep/ .ps-inverted .ps__rail-x:hover > .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__rail-x:focus > .ps__thumb-x,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:hover > .ps__thumb-y,\n.material-style :host /deep/ .ps-inverted .ps__rail-y:focus > .ps__thumb-y {\n  background-color: #fff; }\n"

/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-block.component.ts":
/*!************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-block.component.ts ***!
  \************************************************************/
/*! exports provided: SidenavBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavBlockComponent", function() { return SidenavBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidenavBlockComponent = /** @class */ (function () {
    function SidenavBlockComponent() {
    }
    SidenavBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-block',
            template: "\n  <ng-content></ng-content>\n  ",
            host: { '[class.sidenav-block]': 'true', '[class.d-block]': 'true' }
        })
    ], SidenavBlockComponent);
    return SidenavBlockComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-divider.component.ts":
/*!**************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-divider.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavDividerComponent", function() { return SidenavDividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidenavDividerComponent = /** @class */ (function () {
    function SidenavDividerComponent() {
    }
    SidenavDividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-divider',
            template: '',
            host: { '[class.sidenav-divider]': 'true', '[class.d-block]': 'true' }
        })
    ], SidenavDividerComponent);
    return SidenavDividerComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-header.component.ts ***!
  \*************************************************************/
/*! exports provided: SidenavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavHeaderComponent", function() { return SidenavHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidenavHeaderComponent = /** @class */ (function () {
    function SidenavHeaderComponent() {
    }
    SidenavHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-header',
            template: "\n  <ng-content></ng-content>\n  ",
            host: { '[class.sidenav-header]': 'true', '[class.d-block]': 'true' }
        })
    ], SidenavHeaderComponent);
    return SidenavHeaderComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-link.component.ts":
/*!***********************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-link.component.ts ***!
  \***********************************************************/
/*! exports provided: SidenavLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavLinkComponent", function() { return SidenavLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavLinkComponent = /** @class */ (function () {
    function SidenavLinkComponent() {
        this.target = '_self';
        this.linkClass = '';
        this.badge = null;
        this.badgeClass = '';
        this.disabled = false;
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "target", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "linkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavLinkComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavLinkComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.disabled'),
        __metadata("design:type", Boolean)
    ], SidenavLinkComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Boolean)
    ], SidenavLinkComponent.prototype, "active", void 0);
    SidenavLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-link',
            template: "\n<a [href]=\"href\" [target]=\"target\" class=\"sidenav-link\" [ngClass]=\"linkClass\">\n  <i class=\"sidenav-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n  <div><ng-content></ng-content></div>\n  <div *ngIf=\"badge\" class=\"ml-auto pl-1\"><div class=\"badge\" [ngClass]=\"badgeClass\">{{badge}}</div></div>\n</a>\n  ",
            host: { '[class.sidenav-item]': 'true', '[class.d-block]': 'true' }
        })
    ], SidenavLinkComponent);
    return SidenavLinkComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: SidenavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function() { return SidenavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavMenuComponent = /** @class */ (function () {
    function SidenavMenuComponent() {
        this.linkClass = '';
        this.badge = null;
        this.badgeClass = '';
        this.disabled = false;
        this.active = false;
        this.open = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavMenuComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavMenuComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavMenuComponent.prototype, "linkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavMenuComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavMenuComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.disabled'),
        __metadata("design:type", Boolean)
    ], SidenavMenuComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Boolean)
    ], SidenavMenuComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Boolean)
    ], SidenavMenuComponent.prototype, "open", void 0);
    SidenavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-menu',
            template: "\n<a href=\"#\" class=\"sidenav-link sidenav-toggle\" [ngClass]=\"linkClass\">\n  <i class=\"sidenav-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n  <div [innerHTML]=\"text\"></div>\n  <div *ngIf=\"badge\" class=\"ml-auto pl-1\"><div class=\"badge\" [ngClass]=\"badgeClass\">{{badge}}</div></div>\n</a>\n<div class=\"sidenav-menu\">\n  <ng-content></ng-content>\n</div>\n  ",
            host: { '[class.sidenav-item]': 'true', '[class.d-block]': 'true' }
        })
    ], SidenavMenuComponent);
    return SidenavMenuComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav-router-link.component.ts":
/*!******************************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav-router-link.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavRouterLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavRouterLinkComponent", function() { return SidenavRouterLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavRouterLinkComponent = /** @class */ (function () {
    function SidenavRouterLinkComponent() {
        this.linkClass = '';
        this.badge = null;
        this.badgeClass = '';
        this.disabled = false;
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavRouterLinkComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavRouterLinkComponent.prototype, "linkClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavRouterLinkComponent.prototype, "badgeClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.disabled'),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "route", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "queryParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavRouterLinkComponent.prototype, "fragment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavRouterLinkComponent.prototype, "queryParamsHandling", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "preserveFragment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "skipLocationChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavRouterLinkComponent.prototype, "replaceUrl", void 0);
    SidenavRouterLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-router-link',
            template: "\n<a\n  [routerLink]=\"route\"\n  [queryParams]=\"queryParams\"\n  [fragment]=\"fragment\"\n  [queryParamsHandling]=\"queryParamsHandling\"\n  [preserveFragment]=\"preserveFragment\"\n  [skipLocationChange]=\"skipLocationChange\"\n  [replaceUrl]=\"replaceUrl\"\n  class=\"sidenav-link\"\n  [ngClass]=\"linkClass\">\n  <i class=\"sidenav-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n  <div><ng-content></ng-content></div>\n  <div *ngIf=\"badge\" class=\"ml-auto pl-1\"><div class=\"badge\" [ngClass]=\"badgeClass\">{{badge}}</div></div>\n</a>\n  ",
            host: { '[class.sidenav-item]': 'true', '[class.d-block]': 'true' }
        })
    ], SidenavRouterLinkComponent);
    return SidenavRouterLinkComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNav = __webpack_require__(/*! ./sidenav.js */ "./src/vendor/libs/sidenav/sidenav.js").SideNav;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(el, zone, ref) {
        this.el = el;
        this.zone = zone;
        this.ref = ref;
        this.orientation = 'vertical';
        this.animate = true;
        this.accordion = true;
        this.closeChildren = false;
        this.showDropdownOnHover = false;
        this.ref.detach();
        this.el.nativeElement.classList.add('sidenav');
        this.el.nativeElement.classList.add("sidenav-" + (this.orientation === 'horizontal' ? 'horizontal' : 'vertical'));
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.sidenav = new SideNav(_this.el.nativeElement, {
                orientation: _this.orientation,
                animate: _this.animate,
                accordion: _this.accordion,
                closeChildren: _this.closeChildren,
                showDropdownOnHover: _this.showDropdownOnHover,
                onOpen: _this.onOpen,
                onOpened: _this.onOpened,
                onClose: _this.onClose,
                onClosed: _this.onClosed
            }, perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"]);
        });
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.sidenav)
            this.zone.runOutsideAngular(function () { return _this.sidenav.destroy(); });
        this.sidenav = null;
        this.el = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "orientation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "animate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "accordion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "closeChildren", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "showDropdownOnHover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], SidenavComponent.prototype, "onClosed", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav',
            exportAs: 'sidenav',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ../ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss */ "./src/vendor/libs/ngx-perfect-scrollbar/ngx-perfect-scrollbar.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav.js":
/*!********************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e,t){var n=function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=447)}({447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=["transitionend","webkitTransitionEnd","oTransitionEnd"],o=["transition","MozTransition","webkitTransition","WebkitTransition","OTransition"],r=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._el=t,this._horizontal="horizontal"===n.orientation,this._animate=!1!==n.animate&&this._supportsTransitionEnd(),this._accordion=!1!==n.accordion,this._closeChildren=Boolean(n.closeChildren),this._showDropdownOnHover=Boolean(n.showDropdownOnHover),this._rtl="rtl"===document.documentElement.getAttribute("dir")||"rtl"===document.body.getAttribute("dir"),this._lastWidth=this._horizontal?window.innerWidth:null,this._onOpen=n.onOpen||function(){},this._onOpened=n.onOpened||function(){},this._onClose=n.onClose||function(){},this._onClosed=n.onClosed||function(){},t.classList.add("sidenav"),t.classList[this._animate?"remove":"add"]("sidenav-no-animation"),this._horizontal){t.classList.add("sidenav-horizontal"),t.classList.remove("sidenav-vertical"),this._inner=t.querySelector(".sidenav-inner");var s=this._inner.parentNode;this._prevBtn=t.querySelector(".sidenav-horizontal-prev"),this._prevBtn||(this._prevBtn=document.createElement("a"),this._prevBtn.href="#",this._prevBtn.className="sidenav-horizontal-prev",s.appendChild(this._prevBtn)),this._wrapper=t.querySelector(".sidenav-horizontal-wrapper"),this._wrapper||(this._wrapper=document.createElement("div"),this._wrapper.className="sidenav-horizontal-wrapper",this._wrapper.appendChild(this._inner),s.appendChild(this._wrapper)),this._nextBtn=t.querySelector(".sidenav-horizontal-next"),this._nextBtn||(this._nextBtn=document.createElement("a"),this._nextBtn.href="#",this._nextBtn.className="sidenav-horizontal-next",s.appendChild(this._nextBtn)),this._innerPosition=0,this.update()}else{t.classList.add("sidenav-vertical"),t.classList.remove("sidenav-horizontal");var o=i||window.PerfectScrollbar;o&&(this._scrollbar=new o(t.querySelector(".sidenav-inner"),{suppressScrollX:!0,wheelPropagation:!0}))}this._bindEvents(),t.sidenavInstance=this}return i(e,[{key:"open",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._closeChildren,i=this._findUnopenedParent(this._getItem(e,!0),n);if(i){var s=this._getLink(i,!0);this._horizontal&&this._isRoot(i)?(this._onOpen(this,i,s,this._findMenu(i)),this._toggleDropdown(!0,i,n),this._onOpened(this,i,s,this._findMenu(i))):(this._animate?(this._onOpen(this,i,s,this._findMenu(i)),window.requestAnimationFrame(function(){return t._toggleAnimation(!0,i,!1)})):(this._onOpen(this,i,s,this._findMenu(i)),i.classList.add("open"),this._onOpened(this,i,s,this._findMenu(i))),this._accordion&&this._closeOther(i,n))}}},{key:"close",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._closeChildren,i=this._getItem(e,!0),s=this._getLink(e,!0);if(i.classList.contains("open")&&!i.classList.contains("disabled"))if(this._horizontal&&this._isRoot(i))this._onClose(this,i,s,this._findMenu(i)),this._toggleDropdown(!1,i,n),this._onClosed(this,i,s,this._findMenu(i));else if(this._animate)this._onClose(this,i,s,this._findMenu(i)),window.requestAnimationFrame(function(){return t._toggleAnimation(!1,i,n)});else{if(this._onClose(this,i,s,this._findMenu(i)),i.classList.remove("open"),n)for(var o=i.querySelectorAll(".sidenav-item.open"),r=0,l=o.length;r<l;r++)o[r].classList.remove("open");this._onClosed(this,i,s,this._findMenu(i))}}},{key:"toggle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._closeChildren,n=this._getItem(e,!0);this._getLink(e,!0),n.classList.contains("open")?this.close(n,t):this.open(n,t)}},{key:"closeAll",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._closeChildren,t=this._el.querySelectorAll(".sidenav-inner > .sidenav-item.open"),n=0,i=t.length;n<i;n++)this.close(t[n],e)}},{key:"setActive",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=this._getItem(e,!1);if(t&&i)for(var o=this._el.querySelectorAll(".sidenav-inner .sidenav-item.active"),r=0,l=o.length;r<l;r++)o[r].classList.remove("active");if(t&&n){var a=this._findParent(s,"sidenav-item",!1);a&&this.open(a)}for(;s;)s.classList[t?"add":"remove"]("active"),s=this._findParent(s,"sidenav-item",!1)}},{key:"setDisabled",value:function(e,t){this._getItem(e,!1).classList[t?"add":"remove"]("disabled")}},{key:"isActive",value:function(e){return this._getItem(e,!1).classList.contains("active")}},{key:"isOpened",value:function(e){return this._getItem(e,!1).classList.contains("open")}},{key:"isDisabled",value:function(e){return this._getItem(e,!1).classList.contains("disabled")}},{key:"update",value:function(){if(this._horizontal){this.closeAll();var e=Math.round(this._wrapper.getBoundingClientRect().width),t=this._innerWidth,n=this._innerPosition;e-n>t&&((n=e-t)>0&&(n=0),this._innerPosition=n),this._updateSlider(e,t,n)}else this._scrollbar&&this._scrollbar.update()}},{key:"_updateSlider",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=null!==e?e:Math.round(this._wrapper.getBoundingClientRect().width),s=null!==t?t:this._innerWidth,o=null!==n?n:this._innerPosition;0===o?this._prevBtn.classList.add("disabled"):this._prevBtn.classList.remove("disabled"),s+o<=i?this._nextBtn.classList.add("disabled"):this._nextBtn.classList.remove("disabled")}},{key:"destroy",value:function(){if(this._el){this._unbindEvents();for(var e=this._el.querySelectorAll(".sidenav-item"),t=0,n=e.length;t<n;t++)this._unbindAnimationEndEvent(e[t]),e[t].classList.remove("sidenav-item-animating"),e[t].classList.remove("open"),e[t].style.overflow=null,e[t].style.height=null;for(var i=this._el.querySelectorAll(".sidenav-menu"),s=0,o=i.length;s<o;s++)i[s].style.marginRight=null,i[s].style.marginLeft=null;this._el.classList.remove("sidenav-no-animation"),this._wrapper&&(this._prevBtn.parentNode.removeChild(this._prevBtn),this._nextBtn.parentNode.removeChild(this._nextBtn),this._wrapper.parentNode.insertBefore(this._inner,this._wrapper),this._wrapper.parentNode.removeChild(this._wrapper),this._inner.style.marginLeft=null,this._inner.style.marginRight=null),this._el.sidenavInstance=null,delete this._el.sidenavInstance,this._el=null,this._horizontal=null,this._animate=null,this._accordion=null,this._closeChildren=null,this._showDropdownOnHover=null,this._rtl=null,this._onOpen=null,this._onOpened=null,this._onClose=null,this._onClosed=null,this._scrollbar&&(this._scrollbar.destroy(),this._scrollbar=null),this._inner=null,this._prevBtn=null,this._wrapper=null,this._nextBtn=null}}},{key:"_getLink",value:function(e,t){var n=[],i=t?"sidenav-toggle":"sidenav-link";if(e.classList.contains(i)?n=[e]:e.classList.contains("sidenav-item")&&(n=this._findChild(e,[i])),!n.length)throw new Error("`"+i+"` element not found.");return n[0]}},{key:"_getItem",value:function(e,t){var n=null,i=t?"sidenav-toggle":"sidenav-link";if(e.classList.contains("sidenav-item")?this._findChild(e,[i]).length&&(n=e):e.classList.contains(i)&&(n=e.parentNode.classList.contains("sidenav-item")?e.parentNode:null),!n)throw new Error((t?"Toggable ":"")+"`.sidenav-item` element not found.");return n}},{key:"_findUnopenedParent",value:function(e,t){for(var n=[],i=null;e;)e.classList.contains("disabled")?(i=null,n=[]):(e.classList.contains("open")||(i=e),n.push(e)),e=this._findParent(e,"sidenav-item",!1);if(!i)return null;if(1===n.length)return i;for(var s=0,o=(n=n.slice(0,n.indexOf(i))).length;s<o;s++)if(n[s].classList.add("open"),this._accordion)for(var r=this._findChild(n[s].parentNode,["sidenav-item","open"]),l=0,a=r.length;l<a;l++)if(r[l]!==n[s]&&(r[l].classList.remove("open"),t))for(var d=r[l].querySelectorAll(".sidenav-item.open"),h=0,u=d.length;h<u;h++)d[h].classList.remove("open");return i}},{key:"_closeOther",value:function(e,t){for(var n=this._findChild(e.parentNode,["sidenav-item","open"]),i=0,s=n.length;i<s;i++)n[i]!==e&&this.close(n[i],t)}},{key:"_toggleAnimation",value:function(e,t,n){var i=this,s=this._getLink(t,!0),o=this._findMenu(t);this._unbindAnimationEndEvent(t);var r=Math.round(s.getBoundingClientRect().height);t.style.overflow="hidden";var l=function(){t.classList.remove("sidenav-item-animating"),t.classList.remove("sidenav-item-closing"),t.style.overflow=null,t.style.height=null,i._horizontal||i.update()};e?(t.style.height=r+"px",t.classList.add("sidenav-item-animating"),t.classList.add("open"),this._bindAnimationEndEvent(t,function(){l(),i._onOpened(i,t,s,o)}),setTimeout(function(){return t.style.height=r+Math.round(o.getBoundingClientRect().height)+"px"},50)):(t.style.height=r+Math.round(o.getBoundingClientRect().height)+"px",t.classList.add("sidenav-item-animating"),t.classList.add("sidenav-item-closing"),this._bindAnimationEndEvent(t,function(){if(t.classList.remove("open"),l(),n)for(var e=t.querySelectorAll(".sidenav-item.open"),r=0,a=e.length;r<a;r++)e[r].classList.remove("open");i._onClosed(i,t,s,o)}),setTimeout(function(){return t.style.height=r+"px"},50))}},{key:"_toggleDropdown",value:function(e,t,n){var i=this._findMenu(t);if(e){var s=Math.round(this._wrapper.getBoundingClientRect().width),o=(this._innerWidth,this._innerPosition),r=this._getItemOffset(t),l=Math.round(t.getBoundingClientRect().width);r-5<=-1*o?this._innerPosition=-1*r:r+o+l+5>=s&&(this._innerPosition=l>s?-1*r:-1*(r+l-s)),t.classList.add("open");var a=Math.round(i.getBoundingClientRect().width);r+this._innerPosition+a>s&&a<s&&a>l&&(i.style[this._rtl?"marginRight":"marginLeft"]="-"+(a-l)+"px"),this._closeOther(t,n),this._updateSlider()}else{var d=this._findChild(t,["sidenav-toggle"]);if(d.length&&d[0].removeAttribute("data-hover","true"),t.classList.remove("open"),i.style[this._rtl?"marginRight":"marginLeft"]=null,n)for(var h=i.querySelectorAll(".sidenav-item.open"),u=0,v=h.length;u<v;u++)h[u].classList.remove("open")}}},{key:"_slide",value:function(e){var t=Math.round(this._wrapper.getBoundingClientRect().width),n=this._innerWidth,i=void this._innerPosition;"next"===e?(i=this._getSlideNextPos(),n+i<t&&(i=t-n)):(i=this._getSlidePrevPos())>0&&(i=0),this._innerPosition=i,this.update()}},{key:"_getSlideNextPos",value:function(){for(var e=Math.round(this._wrapper.getBoundingClientRect().width),t=this._innerPosition,n=this._inner.childNodes[0],i=0;n;){if(n.tagName){var s=Math.round(n.getBoundingClientRect().width);if(i+t-5<=e&&i+t+s+5>=e){s>e&&i===-1*t&&(i+=s);break}i+=s}n=n.nextSibling}return-1*i}},{key:"_getSlidePrevPos",value:function(){for(var e=Math.round(this._wrapper.getBoundingClientRect().width),t=this._innerPosition,n=this._inner.childNodes[0],i=0;n;){if(n.tagName){var s=Math.round(n.getBoundingClientRect().width);if(i-5<=-1*t&&i+s+5>=-1*t){s<=e&&(i=i+s-e);break}i+=s}n=n.nextSibling}return-1*i}},{key:"_getItemOffset",value:function(e){for(var t=this._inner.childNodes[0],n=0;t!==e;)t.tagName&&(n+=Math.round(t.getBoundingClientRect().width)),t=t.nextSibling;return n}},{key:"_bindAnimationEndEvent",value:function(e,t){var n=this,i=function(i){i.target===e&&(n._unbindAnimationEndEvent(e),t(i))},o=window.getComputedStyle(e).transitionDuration;o=parseFloat(o)*(-1!==o.indexOf("ms")?1:1e3),e._sideNavAnimationEndEventCb=i,s.forEach(function(t){return e.addEventListener(t,e._sideNavAnimationEndEventCb,!1)}),e._sideNavAnimationEndEventTimeout=setTimeout(function(){i({target:e})},o+50)}},{key:"_unbindAnimationEndEvent",value:function(e){var t=e._sideNavAnimationEndEventCb;e._sideNavAnimationEndEventTimeout&&(clearTimeout(e._sideNavAnimationEndEventTimeout),e._sideNavAnimationEndEventTimeout=null),t&&(s.forEach(function(n){return e.removeEventListener(n,t,!1)}),e._sideNavAnimationEndEventCb=null)}},{key:"_bindEvents",value:function(){var e=this;this._evntElClick=function(t){var n=t.target.classList.contains("sidenav-toggle")?t.target:e._findParent(t.target,"sidenav-toggle",!1);n&&(t.preventDefault(),"true"!==n.getAttribute("data-hover")&&e.toggle(n))},this._el.addEventListener("click",this._evntElClick),this._evntWindowResize=function(){e._horizontal?e._lastWidth!==window.innerWidth&&(e._lastWidth=window.innerWidth,e.update()):e.update()},window.addEventListener("resize",this._evntWindowResize),this._horizontal&&(this._evntPrevBtnClick=function(t){t.preventDefault(),e._prevBtn.classList.contains("disabled")||e._slide("prev")},this._prevBtn.addEventListener("click",this._evntPrevBtnClick),this._evntNextBtnClick=function(t){t.preventDefault(),e._nextBtn.classList.contains("disabled")||e._slide("next")},this._nextBtn.addEventListener("click",this._evntNextBtnClick),this._evntBodyClick=function(t){!e._inner.contains(t.target)&&e._el.querySelectorAll(".sidenav-inner > .sidenav-item.open").length&&e.closeAll()},document.body.addEventListener("click",this._evntBodyClick),this._evntHorizontalElClick=function(t){var n=t.target.classList.contains("sidenav-link")?t.target:e._findParent(t.target,"sidenav-link",!1);n&&!n.classList.contains("sidenav-toggle")&&e.closeAll()},this._el.addEventListener("click",this._evntHorizontalElClick),this._showDropdownOnHover&&(this._evntInnerMousemove=function(t){for(var n=e._findParent(t.target,"sidenav-item",!1),i=null;n;)i=n,n=e._findParent(n,"sidenav-item",!1);if(i&&!i.classList.contains("open")){var s=e._findChild(i,["sidenav-toggle"]);s.length&&(s[0].setAttribute("data-hover","true"),e.open(s[0],e._closeChildren,!0),setTimeout(function(){s[0].removeAttribute("data-hover")},500))}},this._inner.addEventListener("mousemove",this._evntInnerMousemove),this._evntInnerMouseleave=function(t){e.closeAll()},this._inner.addEventListener("mouseleave",this._evntInnerMouseleave)))}},{key:"_unbindEvents",value:function(){this._evntElClick&&(this._el.removeEventListener("click",this._evntElClick),this._evntElClick=null),this._evntWindowResize&&(window.removeEventListener("resize",this._evntWindowResize),this._evntWindowResize=null),this._evntPrevBtnClick&&(this._prevBtn.removeEventListener("click",this._evntPrevBtnClick),this._evntPrevBtnClick=null),this._evntNextBtnClick&&(this._nextBtn.removeEventListener("click",this._evntNextBtnClick),this._evntNextBtnClick=null),this._evntBodyClick&&(document.body.removeEventListener("click",this._evntBodyClick),this._evntBodyClick=null),this._evntHorizontalElClick&&(this._el.removeEventListener("click",this._evntHorizontalElClick),this._evntHorizontalElClick=null),this._evntInnerMousemove&&(this._inner.removeEventListener("mousemove",this._evntInnerMousemove),this._evntInnerMousemove=null),this._evntInnerMouseleave&&(this._inner.removeEventListener("mouseleave",this._evntInnerMouseleave),this._evntInnerMouseleave=null)}},{key:"_findMenu",value:function(e){for(var t=e.childNodes[0],n=null;t&&!n;)t.classList&&t.classList.contains("sidenav-menu")&&(n=t),t=t.nextSibling;if(!n)throw new Error("Cannot find `.sidenav-menu` element for the current `.sidenav-toggle`");return n}},{key:"_isRoot",value:function(e){return!this._findParent(e,"sidenav-item",!1)}},{key:"_findParent",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("BODY"===e.tagName.toUpperCase())return null;for(e=e.parentNode;"BODY"!==e.tagName.toUpperCase()&&!e.classList.contains(t);)e=e.parentNode;if(!(e="BODY"!==e.tagName.toUpperCase()?e:null)&&n)throw new Error("Cannot find `."+t+"` parent element");return e}},{key:"_findChild",value:function(e,t){for(var n=e.childNodes,i=[],s=0,o=n.length;s<o;s++)if(n[s].classList){for(var r=0,l=0;l<t.length;l++)n[s].classList.contains(t[l])&&r++;t.length===r&&i.push(n[s])}return i}},{key:"_supportsTransitionEnd",value:function(){if(window.QUnit)return!1;var e=document.body||document.documentElement,t=!1;return o.forEach(function(n){void 0!==e.style[n]&&(t=!0)}),t}},{key:"_innerWidth",get:function(){for(var e=this._inner.childNodes,t=0,n=0,i=e.length;n<i;n++)e[n].tagName&&(t+=Math.round(e[n].getBoundingClientRect().width));return t}},{key:"_innerPosition",get:function(){return parseInt(this._inner.style[this._rtl?"marginRight":"marginLeft"]||"0px")},set:function(e){return this._inner.style[this._rtl?"marginRight":"marginLeft"]=e+"px",e}}]),e}();t.SideNav=r}});if("object"==typeof n){var i=["object"==typeof module&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,e&&e!==window?e:null];for(var s in n)i[0]&&(i[0][s]=n[s]),i[1]&&"__esModule"!==s&&(i[1][s]=n[s]),i[2]&&(i[2][s]=n[s])}}(this);

/***/ }),

/***/ "./src/vendor/libs/sidenav/sidenav.module.ts":
/*!***************************************************!*\
  !*** ./src/vendor/libs/sidenav/sidenav.module.ts ***!
  \***************************************************/
/*! exports provided: SidenavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModule", function() { return SidenavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav.component */ "./src/vendor/libs/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav-link.component */ "./src/vendor/libs/sidenav/sidenav-link.component.ts");
/* harmony import */ var _sidenav_router_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidenav-router-link.component */ "./src/vendor/libs/sidenav/sidenav-router-link.component.ts");
/* harmony import */ var _sidenav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav-menu.component */ "./src/vendor/libs/sidenav/sidenav-menu.component.ts");
/* harmony import */ var _sidenav_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav-block.component */ "./src/vendor/libs/sidenav/sidenav-block.component.ts");
/* harmony import */ var _sidenav_divider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav-divider.component */ "./src/vendor/libs/sidenav/sidenav-divider.component.ts");
/* harmony import */ var _sidenav_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenav-header.component */ "./src/vendor/libs/sidenav/sidenav-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SidenavModule = /** @class */ (function () {
    function SidenavModule() {
    }
    SidenavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
                _sidenav_link_component__WEBPACK_IMPORTED_MODULE_4__["SidenavLinkComponent"],
                _sidenav_router_link_component__WEBPACK_IMPORTED_MODULE_5__["SidenavRouterLinkComponent"],
                _sidenav_menu_component__WEBPACK_IMPORTED_MODULE_6__["SidenavMenuComponent"],
                _sidenav_block_component__WEBPACK_IMPORTED_MODULE_7__["SidenavBlockComponent"],
                _sidenav_divider_component__WEBPACK_IMPORTED_MODULE_8__["SidenavDividerComponent"],
                _sidenav_header_component__WEBPACK_IMPORTED_MODULE_9__["SidenavHeaderComponent"]
            ],
            exports: [
                _sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
                _sidenav_link_component__WEBPACK_IMPORTED_MODULE_4__["SidenavLinkComponent"],
                _sidenav_router_link_component__WEBPACK_IMPORTED_MODULE_5__["SidenavRouterLinkComponent"],
                _sidenav_menu_component__WEBPACK_IMPORTED_MODULE_6__["SidenavMenuComponent"],
                _sidenav_block_component__WEBPACK_IMPORTED_MODULE_7__["SidenavBlockComponent"],
                _sidenav_divider_component__WEBPACK_IMPORTED_MODULE_8__["SidenavDividerComponent"],
                _sidenav_header_component__WEBPACK_IMPORTED_MODULE_9__["SidenavHeaderComponent"]
            ]
        })
    ], SidenavModule);
    return SidenavModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\rhythm\rolodex-console3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map