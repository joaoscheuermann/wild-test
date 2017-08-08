webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_REST_rest_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, rest, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.src_items = [];
        this.items = [];
        this.firstRun = true;
    }
    // LIFE CICLE EVENTS
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // FIRES THE LOADING
        this.loader = this.loadingCtrl.create({
            content: "Loading contacts ..."
        });
        this.loader.present();
        this.alert = this.alertCtrl.create({
            title: 'Connection error!',
            subTitle: 'Cannot connect to the server. Try again later!',
            buttons: [{
                    text: 'Try again!',
                    handler: function () {
                        _this.reload();
                    }
                }]
        });
        // UPDATE THE CONTACT LIST
        this.refreshContacts(function () { return _this.loader.dismiss(); }, function () { return _this.loader.dismiss(); });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (!this.firstRun) {
            this.refreshContacts();
        }
        else {
            this.firstRun = false;
        }
    };
    // REST INTERACTION
    HomePage.prototype.refreshContacts = function (donefn, errfn) {
        var _this = this;
        this.rest
            .getContacts()
            .subscribe(function (res) {
            _this.src_items = res;
            _this.items = _this.src_items;
            if (donefn)
                donefn();
        }, function (err) {
            if (errfn)
                errfn(err);
            _this.alert.present();
        });
    };
    // ERROR HANDLING??
    HomePage.prototype.reload = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    // USER INTERACTION
    HomePage.prototype.search = function (ev) {
        this.items = this.src_items;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.src_items.filter(function (item) {
                return item.Name.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    HomePage.prototype.click = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */], { item: item });
    };
    HomePage.prototype.refresh = function (ev) {
        this.refreshContacts(function () { return ev.complete(); });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/joao.scheuermann/Desktop/TEST ZONE/ionic/teste_vm/REST-Contactlist-Ionic/src/pages/home/home.html"*/'<!-- <ion-header>\n    <ion-navbar>\n        <ion-title>\n            Contatos\n        </ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="search($event)"></ion-searchbar>\n\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list no-lines>\n        <button ion-item *ngFor="let item of items" (click)="click(item)">\n            <ion-avatar item-start>\n                 <img src="http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png">                 \n            </ion-avatar>\n            <h2>{{item.Name}}</h2>\n            <p>Tel: {{item.Telephone}}</p>\n        </button >\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/joao.scheuermann/Desktop/TEST ZONE/ionic/teste_vm/REST-Contactlist-Ionic/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_REST_rest_service__["a" /* RESTService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_REST_rest_service__["a" /* RESTService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESTService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RESTService = (function () {
    function RESTService(http) {
        this.http = http;
        this.url = "http://localhost:3000/contacts";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    RESTService.prototype.getContacts = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    RESTService.prototype.addContact = function (obj) {
        return this.http.post(this.url, obj, this.options).map(function (res) { return res.json(); });
    };
    RESTService.prototype.deleteContact = function (obj) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            body: obj
        });
        return this.http.delete(this.url, options).map(function (res) { return res.json(); });
    };
    RESTService.prototype.updateContact = function (obj) {
        return this.http.put(this.url, obj, this.options).map(function (res) { return res.json(); });
    };
    return RESTService;
}());
RESTService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RESTService);

//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_REST_rest_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, _params, rest, alertCtrl) {
        this.navCtrl = navCtrl;
        this._params = _params;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.editing = false;
    }
    ContactPage.prototype.ngOnInit = function () {
        var _this = this;
        this.item = this._params.get('item');
        this.connectionAlert = {
            title: 'Connection!',
            subTitle: 'Cannot this action. Try again later!',
            buttons: [{
                    text: 'OK!',
                }]
        };
        this.deleteAlert = {
            title: 'Are you sure?',
            buttons: [{
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'DELETE',
                    handler: function () {
                        _this.deleteContact();
                    }
                }]
        };
    };
    ContactPage.prototype.ionViewWillLeave = function () {
        this.updateContact();
    };
    ContactPage.prototype.updateContact = function () {
        var _this = this;
        this.rest
            .updateContact(this.item)
            .subscribe(function (res) {
        }, function (err) {
            _this.alertCtrl.create(_this.connectionAlert).present();
        });
    };
    ContactPage.prototype.deleteContact = function () {
        var _this = this;
        this.rest
            .deleteContact(this.item)
            .subscribe(function (res) {
            _this.navCtrl.popToRoot();
        }, function (err) {
            _this.alertCtrl.create(_this.connectionAlert).present();
        });
    };
    ContactPage.prototype.handleDeleteClick = function () {
        // this.navCtrl.popToRoot();
        this.alertCtrl.create(this.deleteAlert).present();
    };
    ContactPage.prototype.editToggle = function () {
        this.editing = !this.editing ? true : false;
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/joao.scheuermann/Desktop/TEST ZONE/ionic/teste_vm/REST-Contactlist-Ionic/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{item.Name}}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button (click)="editToggle()">\n                <ion-icon name="create" style="font-size: 22px;" ></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <div class="container">\n        <ion-avatar item-center>\n            <img class="avatar" src="http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png">\n        </ion-avatar>\n\n        <ion-item *ngFor="let key of item | NonPrivateKeys" >\n            <ion-label *ngIf="key !== \'_id\'" stacked>{{ key }}</ion-label>\n            <!-- <ion-input *ngIf="key !== \'_id\'" type="tel" [disabled]="!editing" [(ngModel)]="item[key]" [placeholder]="key" (focusout)="updateContact()"></ion-input> -->\n            <ion-input *ngIf="key !== \'_id\'" type="tel" [disabled]="!editing" [(ngModel)]="item[key]" [placeholder]="key"></ion-input>\n        </ion-item>    \n\n        <div class="btn">\n            <button  ion-button [disabled]="!editing" color="danger" (click)="handleDeleteClick()" full>delete contact</button>   \n        </div>\n\n    </div>\n\n\n   \n\n\n</ion-content>'/*ion-inline-end:"/Users/joao.scheuermann/Desktop/TEST ZONE/ionic/teste_vm/REST-Contactlist-Ionic/src/pages/contact/contact.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_services_REST_rest_service__["a" /* RESTService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_REST_rest_service__["a" /* RESTService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_nonprivatekey_pipe__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_nonprivatekey_pipe__["a" /* NonPrivateKeysPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/joao.scheuermann/Desktop/TEST ZONE/ionic/teste_vm/REST-Contactlist-Ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/joao.scheuermann/Desktop/TEST ZONE/ionic/teste_vm/REST-Contactlist-Ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonPrivateKeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NonPrivateKeysPipe = (function () {
    function NonPrivateKeysPipe() {
    }
    NonPrivateKeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        var keys = [];
        for (var key in value) {
            var arr = key.split('');
            if (arr[0] !== '_')
                keys.push(key);
        }
        return keys;
    };
    return NonPrivateKeysPipe;
}());
NonPrivateKeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'NonPrivateKeys', pure: false })
], NonPrivateKeysPipe);

//# sourceMappingURL=nonprivatekey.pipe.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map