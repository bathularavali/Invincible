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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");






var routes = [
    { path: "", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark navbar-custom sticky-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"\">Study Lifestyle</a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarResponsive\"\r\n      aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"register\">Register</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"login\">Log In</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-4 bg-dark text-white-50\" id=\"sticky-footer\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-7\">\r\n        <div class=\"row justify-content-end\">\r\n          <div class=\"col-auto\">\r\n            <p class=\"copyright text-muted\">\r\n              Copyright &copy;\r\n              <span class=\"text-danger\"> {{ groupName }} </span> 2019\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.groupName = 'Invincible';
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\r\n<div class=\"container\">\r\n  <div class=\"row text-center text-lg-left mt-5\">\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/pWkk7iiCoDM/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/aob0ukAYfuI/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/EUfxH-pze7s/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/M185_qYH8vg/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/sesveuG_rNo/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/AvhMzHwiE_0/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/2gYsZUmockw/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/EMSDtjVHdQ8/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/8mUEy0ABdNE/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/G9Rfc1qccH4/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/aJeH0KcFkuc/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6\">\r\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\r\n        <img\r\n          class=\"img-fluid img-thumbnail\"\r\n          src=\"https://source.unsplash.com/p2TQ-3Bh3Oo/400x300\"\r\n          alt=\"\"\r\n        />\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /.container -->\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Log In</h5>\r\n            <form class=\"form-signin\">\r\n              <div class=\"form-label-group\">\r\n                <input\r\n                  type=\"email\"\r\n                  id=\"inputEmail\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Email address\"\r\n                  required\r\n                  autofocus\r\n                />\r\n                <label for=\"inputEmail\">Email address</label>\r\n              </div>\r\n\r\n              <div class=\"form-label-group\">\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"inputPassword\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Password\"\r\n                  required\r\n                />\r\n                <label for=\"inputPassword\">Password</label>\r\n              </div>\r\n\r\n              <div class=\"custom-control custom-checkbox mb-3\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  id=\"customCheck1\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"customCheck1\"\r\n                  >Remember password</label\r\n                >\r\n              </div>\r\n              <button\r\n                class=\"btn btn-lg btn-dark btn-block text-uppercase\"\r\n                type=\"submit\"\r\n              >\r\n                Sign in\r\n              </button>\r\n              <hr class=\"my-4\" />\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    padding-top: 54px;\r\n    color: #868e96;\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    body {\r\n      padding-top: 0;\r\n      padding-left: 17rem;\r\n    }\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    color: #343a40;\r\n  }\r\n  \r\n  h1 {\r\n    font-size: 6rem;\r\n    line-height: 5.5rem;\r\n  }\r\n  \r\n  h2 {\r\n    font-size: 3.5rem;\r\n  }\r\n  \r\n  h3 {\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  p.lead {\r\n    font-size: 1.15rem;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .subheading {\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .social-icons a {\r\n    display: inline-block;\r\n    height: 3.5rem;\r\n    width: 3.5rem;\r\n    background-color: #495057;\r\n    color: #fff !important;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    line-height: 3.5rem;\r\n    margin-right: 1rem;\r\n  }\r\n  \r\n  .social-icons a:last-child {\r\n    margin-right: 0;\r\n  }\r\n  \r\n  .social-icons a:hover {\r\n    background-color: #BD5D38;\r\n  }\r\n  \r\n  .dev-icons {\r\n    font-size: 3rem;\r\n  }\r\n  \r\n  .dev-icons .list-inline-item i:hover {\r\n    color: #BD5D38;\r\n  }\r\n  \r\n  #sideNav .navbar-nav .nav-item .nav-link {\r\n    font-weight: 800;\r\n    letter-spacing: 0.05rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  #sideNav .navbar-toggler:focus {\r\n    outline-color: #d48a6e;\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    #sideNav {\r\n      text-align: center;\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      width: 17rem;\r\n      height: 100vh;\r\n    }\r\n    #sideNav .navbar-brand {\r\n      display: flex;\r\n      margin: auto auto 0;\r\n      padding: 0.5rem;\r\n    }\r\n    #sideNav .navbar-brand .img-profile {\r\n      max-width: 10rem;\r\n      max-height: 10rem;\r\n      border: 0.5rem solid rgba(255, 255, 255, 0.2);\r\n    }\r\n    #sideNav .navbar-collapse {\r\n      display: flex;\r\n      align-items: flex-start;\r\n      flex-grow: 0;\r\n      width: 100%;\r\n      margin-bottom: auto;\r\n    }\r\n    #sideNav .navbar-collapse .navbar-nav {\r\n      flex-direction: column;\r\n      width: 100%;\r\n    }\r\n    #sideNav .navbar-collapse .navbar-nav .nav-item {\r\n      display: block;\r\n    }\r\n    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  section.resume-section {\r\n    padding-top: 5rem !important;\r\n    padding-bottom: 5rem !important;\r\n    max-width: 75rem;\r\n  }\r\n  \r\n  section.resume-section .resume-item .resume-date {\r\n    min-width: none;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    section.resume-section {\r\n      min-height: 100vh;\r\n    }\r\n    section.resume-section .resume-item .resume-date {\r\n      min-width: 18rem;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    section.resume-section {\r\n      padding-top: 3rem !important;\r\n      padding-bottom: 3rem !important;\r\n    }\r\n  }\r\n  \r\n  .bg-primary {\r\n    background-color: #BD5D38 !important;\r\n  }\r\n  \r\n  .text-primary {\r\n    color: #BD5D38 !important;\r\n  }\r\n  \r\n  a {\r\n    color: #BD5D38;\r\n  }\r\n  \r\n  a:hover, a:focus, a:active {\r\n    color: #824027;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2TEFBNkw7SUFDN0wsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtNQUNFLGNBQWM7TUFDZCxtQkFBbUI7SUFDckI7RUFDRjs7RUFFQTs7Ozs7O0lBTUUsOE1BQThNO0lBQzlNLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsOE1BQThNO0lBQzlNLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLE1BQU07TUFDTixPQUFPO01BR1AsYUFBYTtNQUliLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0E7TUFHRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGVBQWU7SUFDakI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsNkNBQTZDO0lBQy9DO0lBQ0E7TUFHRSxhQUFhO01BR2IsdUJBQXVCO01BR3ZCLFlBQVk7TUFDWixXQUFXO01BQ1gsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFJRSxzQkFBc0I7TUFDdEIsV0FBVztJQUNiO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLDRCQUE0QjtNQUM1QiwrQkFBK0I7SUFDakM7RUFDRjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaScsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcclxuICAgIHBhZGRpbmctdG9wOiA1NHB4O1xyXG4gICAgY29sb3I6ICM4NjhlOTY7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE3cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBmb250LWZhbWlseTogJ1NhaXJhIEV4dHJhIENvbmRlbnNlZCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMzNDNhNDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1LjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIHAubGVhZCB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmEgRXh0cmEgQ29uZGVuc2VkJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtaWNvbnMgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2NpYWwtaWNvbnMgYTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDVEMzg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXYtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICAuZGV2LWljb25zIC5saXN0LWlubGluZS1pdGVtIGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNCRDVEMzg7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGVOYXYgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICAgIG91dGxpbmUtY29sb3I6ICNkNDhhNmU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgI3NpZGVOYXYge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDE3cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgI3NpZGVOYXYgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gMDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgI3NpZGVOYXYgLm5hdmJhci1icmFuZCAuaW1nLXByb2ZpbGUge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgfVxyXG4gICAgI3NpZGVOYXYgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcclxuICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIH1cclxuICAgICNzaWRlTmF2IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYge1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgI3NpZGVOYXYgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgICNzaWRlTmF2IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBzZWN0aW9uLnJlc3VtZS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA3NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbi5yZXN1bWUtc2VjdGlvbiAucmVzdW1lLWl0ZW0gLnJlc3VtZS1kYXRlIHtcclxuICAgIG1pbi13aWR0aDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBzZWN0aW9uLnJlc3VtZS1zZWN0aW9uIHtcclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLnJlc3VtZS1zZWN0aW9uIC5yZXN1bWUtaXRlbSAucmVzdW1lLWRhdGUge1xyXG4gICAgICBtaW4td2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIHNlY3Rpb24ucmVzdW1lLXNlY3Rpb24ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQ1RDM4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNCRDVEMzggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI0JENUQzODtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciwgYTpmb2N1cywgYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICM4MjQwMjc7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n\n  <title>Resume - Start Bootstrap Theme</title>\n\n  <!-- Bootstrap core CSS -->\n  <link href=\"vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n  <!-- Custom fonts for this template -->\n  <link href=\"https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700\" rel=\"stylesheet\">\n  <link href=\"https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i\" rel=\"stylesheet\">\n  <link href=\"vendor/fontawesome-free/css/all.min.css\" rel=\"stylesheet\">\n\n  <!-- Custom styles for this template -->\n  <link href=\"css/resume.min.css\" rel=\"stylesheet\">\n\n</head>\n\n<body id=\"page-top\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\n      <span class=\"d-block d-lg-none\">Clarence Taylor</span>\n      <span class=\"d-none d-lg-block\">\n        <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"img/profile.jpg\" alt=\"\">\n      </span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#experience\">Experience</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#education\">Education</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#skills\">Skills</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#interests\">Interests</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#awards\">Awards</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid p-0\">\n\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"about\">\n      <div class=\"w-100\">\n        <h1 class=\"mb-0\">Clarence\n          <span class=\"text-primary\">Taylor</span>\n        </h1>\n        <div class=\"subheading mb-5\">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·\n          <a href=\"mailto:name@email.com\">name@email.com</a>\n        </div>\n        <p class=\"lead mb-5\">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>\n        <div class=\"social-icons\">\n          <a href=\"#\">\n            <i class=\"fab fa-linkedin-in\"></i>\n          </a>\n          <a href=\"#\">\n            <i class=\"fab fa-github\"></i>\n          </a>\n          <a href=\"#\">\n            <i class=\"fab fa-twitter\"></i>\n          </a>\n          <a href=\"#\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </a>\n        </div>\n      </div>\n    </section>\n\n    <hr class=\"m-0\">\n\n    <section class=\"resume-section p-3 p-lg-5 d-flex justify-content-center\" id=\"experience\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-5\">Experience</h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\">Senior Web Developer</h3>\n            <div class=\"subheading mb-3\">Intelitec Solutions</div>\n            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">March 2013 - Present</span>\n          </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\">Web Developer</h3>\n            <div class=\"subheading mb-3\">Intelitec Solutions</div>\n            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">December 2011 - March 2013</span>\n          </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\">Junior Web Designer</h3>\n            <div class=\"subheading mb-3\">Shout! Media Productions</div>\n            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">July 2010 - December 2011</span>\n          </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\">Web Design Intern</h3>\n            <div class=\"subheading mb-3\">Shout! Media Productions</div>\n            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">September 2008 - June 2010</span>\n          </div>\n        </div>\n\n      </div>\n\n    </section>\n\n    <hr class=\"m-0\">\n\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"education\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-5\">Education</h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\">University of Colorado Boulder</h3>\n            <div class=\"subheading mb-3\">Bachelor of Science</div>\n            <div>Computer Science - Web Development Track</div>\n            <p>GPA: 3.23</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">August 2006 - May 2010</span>\n          </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\">James Buchanan High School</h3>\n            <div class=\"subheading mb-3\">Technology Magnet Program</div>\n            <p>GPA: 3.56</p>\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">August 2002 - May 2006</span>\n          </div>\n        </div>\n\n      </div>\n    </section>\n\n    <hr class=\"m-0\">\n\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"skills\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-5\">Skills</h2>\n\n        <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\n        <ul class=\"list-inline dev-icons\">\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-html5\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-css3-alt\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-js-square\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-angular\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-react\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-node-js\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-sass\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-less\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-wordpress\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-gulp\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-grunt\"></i>\n          </li>\n          <li class=\"list-inline-item\">\n            <i class=\"fab fa-npm\"></i>\n          </li>\n        </ul>\n\n        <div class=\"subheading mb-3\">Workflow</div>\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            Mobile-First, Responsive Design</li>\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            Cross Browser Testing &amp; Debugging</li>\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            Cross Functional Teams</li>\n          <li>\n            <i class=\"fa-li fa fa-check\"></i>\n            Agile Development &amp; Scrum</li>\n        </ul>\n      </div>\n    </section>\n\n    <hr class=\"m-0\">\n\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"interests\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-5\">Interests</h2>\n        <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>\n        <p class=\"mb-0\">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>\n      </div>\n    </section>\n\n    <hr class=\"m-0\">\n\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"awards\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-5\">Awards &amp; Certifications</h2>\n        <ul class=\"fa-ul mb-0\">\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            Google Analytics Certified Developer</li>\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            Mobile Web Specialist - Google Certification</li>\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            1<sup>st</sup>\n            Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            1<sup>st</sup>\n            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            2<sup>nd</sup>\n            Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            1<sup>st</sup>\n            Place - James Buchanan High School - Hackathon 2006</li>\n          <li>\n            <i class=\"fa-li fa fa-trophy text-warning\"></i>\n            3<sup>rd</sup>\n            Place - James Buchanan High School - Hackathon 2005</li>\n        </ul>\n      </div>\n    </section>\n\n  </div>\n\n  <!-- Bootstrap core JavaScript -->\n  <script src=\"vendor/jquery/jquery.min.js\"></script>\n  <script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n  <!-- Plugin JavaScript -->\n  <script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n  <!-- Custom scripts for this template -->\n  <script src=\"js/resume.min.js\"></script>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-signin .card-img-left {\r\n  width: 45%;\r\n  /* Link to your background image using in the property below! */\r\n  background: scroll center url('https://picsum.photos/600/600?random=1');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDViwrREFBK0Q7RUFDL0QsdUVBQXVFO0VBQ3ZFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaWduaW4gLmNhcmQtaW1nLWxlZnQge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgLyogTGluayB0byB5b3VyIGJhY2tncm91bmQgaW1hZ2UgdXNpbmcgaW4gdGhlIHByb3BlcnR5IGJlbG93ISAqL1xyXG4gIGJhY2tncm91bmQ6IHNjcm9sbCBjZW50ZXIgdXJsKCdodHRwczovL3BpY3N1bS5waG90b3MvNjAwLzYwMD9yYW5kb209MScpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-10 col-xl-9 mx-auto\">\r\n        <div class=\"card card-signin flex-row my-5\">\r\n          <div class=\"card-img-left d-none d-md-flex\">\r\n            <!-- Background image for card set in CSS! -->\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Register</h5>\r\n            <form class=\"form-signin\">\r\n              <div class=\"form-label-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"inputUserame\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Username\"\r\n                  required\r\n                  autofocus\r\n                />\r\n                <label for=\"inputUserame\">Username</label>\r\n              </div>\r\n\r\n              <div class=\"form-label-group\">\r\n                <input\r\n                  type=\"email\"\r\n                  id=\"inputEmail\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Email address\"\r\n                  required\r\n                />\r\n                <label for=\"inputEmail\">Email address</label>\r\n              </div>\r\n\r\n              <hr />\r\n\r\n              <div class=\"form-label-group\">\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"inputPassword\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Password\"\r\n                  required\r\n                />\r\n                <label for=\"inputPassword\">Password</label>\r\n              </div>\r\n\r\n              <div class=\"form-label-group\">\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"inputConfirmPassword\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Password\"\r\n                  required\r\n                />\r\n                <label for=\"inputConfirmPassword\">Confirm password</label>\r\n              </div>\r\n\r\n              <button\r\n                class=\"btn btn-lg btn-dark btn-block text-uppercase\"\r\n                type=\"submit\"\r\n              >\r\n                Register\r\n              </button>\r\n              <a class=\"d-block text-center mt-2 small\" href=\"#\">Sign In</a>\r\n              <hr class=\"my-4\" />\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Miaomiao\Documents\AWT\Invincible\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map