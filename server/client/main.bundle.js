webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var shop_component_1 = __webpack_require__("./src/app/components/shop/shop.component.ts");
var cart_component_1 = __webpack_require__("./src/app/components/cart/cart.component.ts");
var user_component_1 = __webpack_require__("./src/app/components/user/user.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/guard/auth.guard.ts");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'shop', component: shop_component_1.ShopComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'cart', component: cart_component_1.CartComponent, canActivate: [auth_guard_1.AuthGuard] },
    //{ path: 'article/:id', component: ShopComponent, canActivate: [AuthGuard] },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 w-100 debug\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n        <a class=\"navbar-brand\" href=\"/\"><i class=\"fa fa-home\"></i></a>\n        <ul class=\"nav navbar-nav ml-auto\" *ngIf=\"router.url != ['/login']\">\n            <li><a *ngIf=\"router.url != ['/user']\" class=\"nav-link text-light\" href=\"/user\" placement=\"bottom\" ngbTooltip=\"Profilseite\"><i class=\"fa fa-user\"></i></a></li>\n            <li><a *ngIf=\"router.url != ['/shop']\" class=\"nav-link text-light\" href=\"/shop\" placement=\"bottom\" ngbTooltip=\"Shop\"><i class=\"fa fa-th\"></i></a> </li>\n            <li><a *ngIf=\"router.url != ['/cart']\" class=\"nav-link text-light\" href=\"/cart\" placement=\"bottom\" ngbTooltip=\"Einkaufswagen\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n            <li><a class=\"nav-link text-light\" href=\"/logout\" style=\"margin-right: 2%\" placement=\"bottom\" ngbTooltip=\"Logout\"><i class=\"fa fa-sign-out\"></i></a>\n            </li>\n        </ul>\n    </nav>\n    <div class=\"footer-fix w-100 h-100\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<footer class=\"page-footer\">\n    <app-chat *ngIf=\"router.url != ['/login']\"></app-chat>\n    <div class=\"container\">\n        <span class=\"text-muted\" style=\"font-size: 12px; \">&copy; Fancy Shit You Will Never Need {{ date | date:'yyyy' }}</span>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "nav {\n  margin-bottom: 0; }\n\n.page-footer {\n  position: fixed;\n  margin-bottom: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #f5f5f5; }\n\n.page-footer .container {\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.date = Date.now();
        this.router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd) {
                if (router.url === '/article') {
                    console.log("show-article");
                }
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/components/login/login.component.ts");
var shop_component_1 = __webpack_require__("./src/app/components/shop/shop.component.ts");
var chat_component_1 = __webpack_require__("./src/app/components/chat/chat.component.ts");
var cart_component_1 = __webpack_require__("./src/app/components/cart/cart.component.ts");
var user_component_1 = __webpack_require__("./src/app/components/user/user.component.ts");
var user_edit_component_1 = __webpack_require__("./src/app/components/user-edit/user-edit.component.ts");
var show_article_component_1 = __webpack_require__("./src/app/components/show-article/show-article.component.ts");
var user_service_1 = __webpack_require__("./src/app/services/user/user.service.ts");
var shop_service_1 = __webpack_require__("./src/app/services/shop/shop.service.ts");
var chat_service_1 = __webpack_require__("./src/app/services/chat/chat.service.ts");
var auth_guard_1 = __webpack_require__("./src/app/guard/auth.guard.ts");
var cart_service_1 = __webpack_require__("./src/app/services/cart/cart.service.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                shop_component_1.ShopComponent,
                cart_component_1.CartComponent,
                user_component_1.UserComponent,
                user_edit_component_1.UserEditComponent,
                show_article_component_1.ShowArticleComponent,
                chat_component_1.ChatComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                chat_service_1.ChatService,
                user_service_1.UserService,
                shop_service_1.ShopService,
                cart_service_1.CartService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent
            ],
            entryComponents: [
                user_component_1.UserComponent,
                show_article_component_1.ShowArticleComponent,
                chat_component_1.ChatComponent,
                user_edit_component_1.UserEditComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/classes/User.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstName, lastName, email, street, number, city, zip, userId, key) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.street = street;
        this.number = number;
        this.city = city;
        this.zip = zip;
        this.userId = userId;
        this.key = key;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/app/classes/message.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(username, message, sendTo, pm) {
        this.username = username;
        this.message = message;
        this.sendTo = sendTo;
        this.pm = pm;
        var options = {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        };
        this.date = new Date().toLocaleString('de-de', options);
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\" style=\"padding-top: 3%; padding-bottom: 5%;\">\n    <div class=\"jumbotron\">\n        <h1 class=\"cover-heading\">\n            <dl>Shopping Cart.</dl>\n        </h1>\n        <p class=\"lead\">Darfs noch etwas sein?<br>\n            <br>\n        <div class=\"row\">\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th scope=\"col-lg-3\" class=\"img-responsive cover-heading\">Artikelbild</th>\n                    <th scope=\"col-lg-3\" class=\"cover-heading\">Artikel</th>\n                    <th scope=\"col-lg-3\" class=\"cover-heading\">Preis</th>\n                    <th scope=\"col-lg-3\" class=\"cover-heading\"></th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of this.cartService.getCart()\">\n                    <td><img src=\"{{item.picture}}\" style=\"width: 8em; height:8em\" alt=\"Image\"></td>\n                    <td class=\"lead\">{{item.name}}</td>\n                    <td class=\"lead\">{{item.price}} {{item.currency}}</td>\n                    <td>\n                        <div class=\"d-flex flex-row-reverse\">\n                            <button type=\"button\" class=\"btn btn-outline-dark\"\n                                    (click)=\"deleteItem(item)\">\n                                <i class=\"fa fa-trash\"></i></button>\n                        </div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <div class=\"col-lg-12\">\n                <span class=\"lead col-lg-12 \">Summe: {{sum | currency : \"EUR\"}}</span><br>\n                <button *ngIf=\"this.cartService.getCart().length\" type=\"button\"\n                        class=\"btn btn-outline-dark\" data-toggle=\"button\">\n                    Jetzt bestellen <i class=\"fa fa-credit-card\"></i></button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var cart_service_1 = __webpack_require__("./src/app/services/cart/cart.service.ts");
var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cartService.update();
        this.getSum();
    };
    CartComponent.prototype.getSum = function () {
        var _this = this;
        this.cartService.updateSum().subscribe(function (sum) {
            _this.sum = sum;
            console.log("Sum is:", _this.sum);
        }, function (err) {
            console.log("Sum could not be calculated;", err);
        });
    };
    CartComponent.prototype.deleteItem = function (item) {
        this.cartService.delete(item);
        this.getSum();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/components/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [cart_service_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;


/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"live-chat\">\n    <header class=\"\" (click)=\"this.chatService.toggleChat()\">\n        <div style=\"display: flex; max-height: 20px;\">\n            <div>\n                <h4>Live-Chat</h4>\n            </div>\n            <div *ngIf=\"this.chatService.unreadMessages\">\n                <div class=\"unread-counter\">{{this.chatService.counter}}</div>\n            </div>\n        </div>\n    </header>\n\n    <div class=\"chat\" [hidden]=\"!this.chatService.showChat\">\n        <div style=\"display: flex;\">\n            <div class=\"chat-history\">\n\n                <div class=\"chat-message clearfix\" *ngFor=\"let item of this.chatService.messages.slice().reverse()\">\n                    <div *ngIf=\"!item.pm\">\n                        <div class=\"chat-message-content clearfix\">\n                            <h5 (click)=\"this.chatService.setPmName(item.username)\"><strong\n                                style=\"font-size: 15px; cursor: pointer;\">{{item.username}}</strong> <span\n                                class=\"chat-time\">{{item.date}}</span></h5>\n                            <h6 class=\"message\">{{item.message}}</h6>\n                        </div>\n                    </div>\n                    <div *ngIf=\"item.pm\">\n                        <div class=\"chat-message-content clearfix\">\n                            <h5 class=\"private\" (click)=\"this.chatService.setPmName(item.username)\"><strong\n                                style=\"font-size: 15px; cursor: pointer;\">{{item.username}}</strong> <span\n                                class=\"chat-time\">{{item.date}}</span></h5>\n                            <h6 class=\"message private\">{{item.message}}</h6>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n\n            </div>\n            <div class=\"userlist\">\n                <h4 class=\"client\" (click)=\"this.chatService.setPmName('all')\"\n                    style=\"font-size: 15px; cursor: pointer;\"><strong>Öffentlich</strong></h4>\n                <h4 class=\"client\" *ngFor=\"let item of this.chatService.clientList\"\n                    (click)=\"this.chatService.setPmName(item)\" style=\"font-size: 15px; cursor: pointer;\"><strong>{{item}}</strong>\n                </h4>\n\n            </div>\n\n        </div>\n        <div>\n            <form>\n                <fieldset>\n                    <h6 class=\"chat-feedback\" *ngIf=\"this.chatService.privateMessageName != 'all'\">to:\n                        {{this.chatService.privateMessageName}}</h6>\n                    <input id=\"message\" name=\"input\" [(ngModel)]=\"this.chatService.message\"\n                           (keyup.enter)=\"this.chatService.sendMessage()\" type=\"text\" placeholder=\"Type your message…\">\n                    <input class=\"button\" type=\"button\" value=\"Senden\" (click)=\"this.chatService.sendMessage()\">\n                </fieldset>\n\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/***/ (function(module, exports) {

module.exports = "fieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nh4, h5 {\n  margin: 0; }\n\nhr {\n  background: #e9e9e9;\n  border: 0;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 1px;\n  margin: 0;\n  min-height: 1px; }\n\ninput {\n  border: 0;\n  color: inherit;\n  font-family: inherit;\n  font-size: 100%;\n  line-height: normal;\n  margin: 0; }\n\np {\n  margin: 0; }\n\n.unread-counter {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #f01; }\n\n.message {\n  word-wrap: break-word;\n  word-break: break-all; }\n\n#live-chat {\n  bottom: 0;\n  font-size: 12px;\n  right: 24px;\n  position: fixed; }\n\n#live-chat header {\n  background: #293239;\n  border-radius: 5px 5px 0 0;\n  color: #fff;\n  cursor: pointer;\n  padding: 16px 24px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n#live-chat h4:before {\n  background: #1a8a34;\n  border-radius: 50%;\n  content: \"\";\n  display: inline-block;\n  height: 8px;\n  margin: 0 8px 0 0;\n  width: 8px; }\n\n#live-chat h4 {\n  font-size: 12px; }\n\n#live-chat h5 {\n  font-size: 10px; }\n\n#live-chat input[type=\"text\"] {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 8px;\n  outline: none;\n  width: 252px;\n  margin-left: 20px; }\n\n.chat {\n  background: #293239; }\n\n.chat-history {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 252px;\n  padding: 8px 8px;\n  overflow-y: scroll;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  background: #e9e9e9; }\n\n.userlist {\n  height: 252px;\n  padding: 8px 8px;\n  overflow-y: scroll;\n  background: #e9e9e9; }\n\n.chat-message {\n  margin: 0px 0; }\n\n.chat-message-content {\n  margin-left: 10px; }\n\n.chat-time {\n  float: right;\n  font-size: 10px; }\n\n.chat-feedback {\n  margin-left: 20px;\n  margin-top: 10px;\n  font-style: italic;\n  color: #fff; }\n\n.button {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 8px;\n  outline: none;\n  width: auto;\n  margin-left: 20px; }\n\n.private {\n  font-style: italic;\n  color: #7e7e7e; }\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var chat_service_1 = __webpack_require__("./src/app/services/chat/chat.service.ts");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
    }
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n    <div class=\"clearfix\">\n    <div class=\"text-center float-left\" id=\"welcomeText\" style=\"padding-top: 6%; padding-left: 6%\">\n        <h1 class=\"cover-heading\">\n            <dl>Fancy Shit You Will Never Need</dl>\n        </h1>\n        <p class=\"lead\">Willkommen und schön dich zu sehen!</p><br>\n        <p class=\"lead\"><span class=\"fa fa-lock\"></span> Bitte logge dich über einen der folgenden Accounts ein. </p>\n        <a href=\"/auth/facebook\" class=\"btn btn-primary\"><span class=\"fa fa-facebook\"></span> Facebook</a>\n        <a href=\"/auth/google\" class=\"btn btn-danger\"><span class=\"fa fa-google-plus\"></span> Google+</a>\n    </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url('grid-3227459_1920.a17d37854fb589020cb3.jpg');\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpClient, router) {
        var _this = this;
        this.httpClient = httpClient;
        this.router = router;
        router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd) {
                _this.httpClient.get('/checkLoggedIn').toPromise().then(function (res) {
                    if (res["user"] != null) {
                        _this.router.navigate(['/shop']);
                    }
                }).catch(function (err) {
                    console.error(err);
                });
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h-100\">\n    <div class=\"bg\">\n        <div class=\"clearfix\">\n            <div class=\"text-center\" style=\"padding-top: 3%\" id=\"heading\">\n                <h1 class=\"cover-heading\">\n                    <dl>Der Online Shop.</dl>\n                </h1>\n                <br>\n                <p class=\"lead\"><kbd>Wasabi da nur bestellt?</kbd><br>\n                <dl>Scharfe Ware jetzt mit 30 Tagen Rückgaberecht.</dl>\n                <br>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"d-flex flex-row justify-content-around flex-wrap\" style=\"margin: 7%; margin-top: 3,5%\">\n        <div class=\"flex-item article\" style=\"width: 27%; margin-bottom: 3.5%\"\n             *ngFor=\"let item of this.shopService.showArticles()\" (click)=\"showArticle(item)\">\n            <img src=\"{{item.picture}}\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\n            <span style=\"margin-right: 10%\">{{item.name}}</span><span>Preis: {{item.price}}{{item.currency}}</span>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shop/shop.component.scss":
/***/ (function(module, exports) {

module.exports = ".article {\n  cursor: pointer; }\n\n.bg {\n  background-image: url(\"https://images.pexels.com/photos/1043519/pexels-photo-1043519.jpeg\");\n  height: 82%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  webkit-filter: grayscale(100%);\n  opacity: 0.9; }\n\n#heading {\n  color: white; }\n\n.img-responsive {\n  opacity: 0.7; }\n\n.img-responsive:hover {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shop_service_1 = __webpack_require__("./src/app/services/shop/shop.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var show_article_component_1 = __webpack_require__("./src/app/components/show-article/show-article.component.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var cart_service_1 = __webpack_require__("./src/app/services/cart/cart.service.ts");
var ShopComponent = /** @class */ (function () {
    function ShopComponent(shopService, cartService, router, route, modalService) {
        this.shopService = shopService;
        this.cartService = cartService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
    }
    ShopComponent.prototype.showArticle = function (article) {
        var _this = this;
        var modalReference = this.modalService.open(show_article_component_1.ShowArticleComponent);
        modalReference.componentInstance.article = article;
        console.log(modalReference.componentInstance);
        modalReference.result.then(function (result) {
            _this.cartService.add(result);
        }).catch(function (error) {
            console.error("windows closed: " + error);
        });
    };
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'app-shop',
            template: __webpack_require__("./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__("./src/app/components/shop/shop.component.scss")]
        }),
        __metadata("design:paramtypes", [shop_service_1.ShopService, cart_service_1.CartService, router_1.Router,
            router_1.ActivatedRoute, ng_bootstrap_1.NgbModal])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;


/***/ }),

/***/ "./src/app/components/show-article/show-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ article.name }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"mx-auto text-center\" style=\"width: 53.3%;\">\n        <img src=\"{{article.picture}}\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\n    </div>\n    <div class=\"mx-auto mt-2 text-center\">{{article.description}}</div>\n    <div class=\"mx-auto mt-1 text-center\">Preis: <span>{{article.price}}</span><span>{{article.currency}}</span></div>\n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-inline-flex flex-row-reverse\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" data-toggle=\"button\" (click)=\"toShoppingCart(article)\">\n            In den Warenkorb <i class=\"fa fa-shopping-cart\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/show-article/show-article.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/show-article/show-article.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ShowArticleComponent = /** @class */ (function () {
    function ShowArticleComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ShowArticleComponent.prototype.toShoppingCart = function () {
        this.activeModal.close(this.article);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShowArticleComponent.prototype, "article", void 0);
    ShowArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-show-article',
            template: __webpack_require__("./src/app/components/show-article/show-article.component.html"),
            styles: [__webpack_require__("./src/app/components/show-article/show-article.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], ShowArticleComponent);
    return ShowArticleComponent;
}());
exports.ShowArticleComponent = ShowArticleComponent;


/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Hier kannst du deine Daten bearbeiten, {{user.firstName}}.</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Vorname </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-8\" id=\"profile_name\" [(ngModel)]=\"user.firstName\">\n    </div>\n    <br/>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Nachname </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-8\" id=\"profile_lastname\" [(ngModel)]=\"user.lastName\">\n    </div>\n    <br/>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Straße </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-8\" id=\"profile_street\" [(ngModel)]=\"user.street\">\n    </div>\n    <br/>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Hausnummer </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-8\" id=\"profile_number\" [(ngModel)]=\"user.number\">\n    </div>\n    <br/>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Wohnort </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-8\" id=\"profile_city\" [(ngModel)]=\"user.city\">\n    </div>\n    <br/>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">PLZ </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-8\" id=\"profile_zip\" [(ngModel)]=\"user.zip\">\n    </div>\n    <br/>\n</div>\n\n<div class=\"modal-footer\">\n    <div class=\"d-inline-flex flex-row-reverse\">\n        <button class=\"btn btn-outline-dark\" data-toggle=\"button\"\n                (click)=\"saveUser(user)\">Speichern<i class=\"fa fa-save\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(activeModal) {
        this.activeModal = activeModal;
    }
    UserEditComponent.prototype.saveUser = function () {
        this.activeModal.close(this.user);
        console.log("editUser().UserEditComponent:", this.user);
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'app-user-edit',
            template: __webpack_require__("./src/app/components/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/user-edit/user-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;


/***/ }),

/***/ "./src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"cover-heading pt-3\">\n        <dl>Hallo <span id=\"profile_displayName\">{{firstName}} {{lastName}} <i class=\"fa fa-heart\"></i></span></dl>\n    </h1>\n    <p class=\"lead\"><kbd>Wir freuen uns,</kbd> dass du Teil des Komplotts geworden bist.<br>\n    <p class=\"lead\">Bitte vergiss nicht, auf die <kbd>Aktualität</kbd> deiner Daten zu achten.<br>\n    <p class=\"lead\">* Bist du das erste Mal hier, fülle bitte die restlichen Felder aus & klicke auf\n        \"Save\".<br>\n    <p class=\"lead\">* Über \"Edit\" kannst du deine Daten bearbeiten.<br>\n\n    <div class=\"input-group\" style=\"padding-top: 3%\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Vor- & Nachname </span>\n        </div>\n        <input class=\"form-control col-lg-4\" id=\"profile_name\" placeholder=\"Wie lautet dein Vorname?\"\n               [(ngModel)]=\"firstName\">\n        <input class=\"form-control col-lg-4\" id=\"profile_lastname\" placeholder=\"Und dein Nachname?\"\n               [(ngModel)]=\"lastName\">\n    </div>\n    <br>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Straße & Hausnummer </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-4\" id=\"profile_street\"\n               placeholder=\"Bitte gib hier deine Straße an.\"\n               [(ngModel)]=\"street\">\n        <input type=\"text\" class=\"form-control col-lg-4\" id=\"profile_number\"\n               placeholder=\"Und wie lautet deine Hausnummer?\"\n               [(ngModel)]=\"number\">\n    </div>\n    <br>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">Wohnort & Postleitzahl </span>\n        </div>\n        <input type=\"text\" class=\"form-control col-lg-4\" id=\"profile_city\"\n               placeholder=\"In welcher Stadt wohnst du überhaupt?\"\n               [(ngModel)]=\"city\">\n        <input type=\"text\" class=\"form-control col-lg-4\" id=\"profile_zip\"\n               placeholder=\"Fast geschafft! Wie lautet deine Postleitzahl?\" [(ngModel)]=\"zip\">\n    </div>\n    <br>\n\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend col-lg-4 pl-0 pr-0\">\n            <span class=\"input-group-text col-lg-12\">E-Mail </span>\n        </div>\n        <input class=\"form-control col-lg-8\" id=\"profile_email\" placeholder=\"Verrate uns bitte noch deine\n        E-Mail Adresse.\"\n               [(ngModel)]=\"email\">\n    </div>\n    <br/>\n\n    <div class=\"flex-lg-row-reverse mb-4\">\n        <ngb-alert type=\"success\" *ngIf=\"thankYouAlert == true\" (close)=\"thankYouAlert = false\">\n            Vielen Dank, dass du deine Profildaten vervollständigt hast!\n        </ngb-alert>\n    </div>\n\n    <div class=\"float-right flex-lg-row-reverse mb-4\">\n        <button class=\"btn btn-outline-dark\" data-toggle=\"button\" *ngIf=\"fullProfileInfo == false\"\n                (click)=\"add()\">Speichern <i class=\"fa fa-save\"></i></button>\n        <button class=\"btn btn-outline-dark\" data-toggle=\"button\" *ngIf=\"fullProfileInfo == true\"\n                (click)=\"editUser()\">Profildaten bearbeiten <i class=\"fa fa-edit\"></i></button>\n        <button class=\"btn btn-outline-dark\" data-toggle=\"button\" *ngIf=\"fullProfileInfo == true\"\n                (click)=\"deleteUser()\">Profildaten löschen <i class=\"fa fa-trash\"></i></button>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var User_1 = __webpack_require__("./src/app/classes/User.ts");
var user_service_1 = __webpack_require__("./src/app/services/user/user.service.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var user_edit_component_1 = __webpack_require__("./src/app/components/user-edit/user-edit.component.ts");
var UserComponent = /** @class */ (function () {
    function UserComponent(userservice, modalService) {
        this.userservice = userservice;
        this.modalService = modalService;
        this.fullProfileInfo = false;
        this.thankYouAlert = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getProfileData();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.userservice.getUser(this.userId)
            .subscribe(function (data) {
            console.log("getUser()", data);
            console.log(_this.userId);
            for (var i = 0; i < data.length; i++) {
                if (data[i].userId == _this.userId) {
                    _this.user = data[i];
                    _this.email = data[i].email.valueOf();
                    _this.username = data[i].displayName;
                    _this.firstName = data[i].firstName;
                    _this.lastName = data[i].lastName;
                    _this.userId = data[i].userId;
                    _this.street = data[i].street;
                    _this.number = data[i].number;
                    _this.city = data[i].city;
                    _this.zip = data[i].zip;
                    _this.key = data[i].key;
                }
            }
            if (data.length != 0) {
                _this.fullProfileInfo = true;
            }
        });
    };
    UserComponent.prototype.getProfileData = function () {
        var _this = this;
        this.userservice.showProfileData()
            .subscribe(function (data) {
            _this.user = data;
            // console.log("getProfileData from login",data);
            _this.email = data.email[0]['value'];
            _this.username = data.displayName;
            _this.firstName = data.firstName;
            _this.lastName = data.lastName;
            _this.userId = data.userId;
            _this.getUser();
        }, function (err) {
            console.log("Error getProfileData()", err);
        });
    };
    UserComponent.prototype.add = function () {
        var _this = this;
        if (!this.street && !this.number && !this.city && !this.zip) {
            return;
        }
        var newUser = new User_1.User(this.firstName, this.lastName, this.email, this.street, this.number, this.city, this.zip, this.userId);
        console.log("New user: ", newUser);
        this.userservice.addUser(newUser)
            .subscribe(function (result) {
            console.log("component:", result);
            _this.getUser();
        }, function (err) {
            console.log("Error add().user.component.ts", err);
        });
        this.fullProfileInfo = true;
        this.thankYouAlert = true;
    };
    UserComponent.prototype.editUser = function () {
        var _this = this;
        this.getUser();
        var modalReference = this.modalService.open(user_edit_component_1.UserEditComponent);
        modalReference.componentInstance.user = this.user;
        console.log(modalReference.componentInstance);
        console.log("editUser().openModal.key:", modalReference.componentInstance.user.key);
        modalReference.result.then(function (modalUser) {
            console.log("edited user:", modalUser);
            _this.userservice.editUser(modalUser);
        }).catch(function (error) {
            console.error("User could not be updated: " + error);
        });
    };
    UserComponent.prototype.deleteUser = function () {
        this.getUser();
        console.log(this.user);
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.street = "";
        this.number = null;
        this.city = "";
        this.zip = null;
        this.userId = "";
        this.key = "";
        this.userservice.deleteUser(this.user);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("./src/app/components/user/user.component.html"),
            styles: [__webpack_require__("./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, ng_bootstrap_1.NgbModal])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.httpClient.get('/checkLoggedIn').toPromise().then(function (res) {
            if (res["user"] != null) {
                return true;
            }
            _this.router.navigate(['/login']);
            return false;
        }).catch(function (err) {
            console.error(err);
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/services/cart/cart.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var of_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var CartService = /** @class */ (function () {
    function CartService(httpClient) {
        this.httpClient = httpClient;
        this.cart = [];
        this.URL = '';
    }
    CartService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed: " + error.message);
            return of_1.of(result);
        };
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.add = function (article) {
        this.cart = [];
        this.cart.push(article);
        this.saveCart();
        this.updateSum();
    };
    CartService.prototype.updateSum = function () {
        var url = this.URL + "/getSum";
        return this.httpClient.get(url)
            .pipe(operators_1.tap(function (sum) {
            console.log("Sum is:", sum);
            return sum;
        }), operators_1.catchError(this.handleError("User nicht gefunden")));
    };
    CartService.prototype.update = function () {
        var _this = this;
        this.httpClient.get('/getCart').toPromise().then(function (res) {
            _this.cart = res["cartItems"];
        }).catch(function (err) {
            console.error(err);
        });
    };
    CartService.prototype.delete = function (article) {
        var _this = this;
        this.cart.forEach(function (item, index) {
            if (item.id == article.id) {
                _this.cart.splice(index, 1);
            }
        });
        this.deleteItem(article);
    };
    CartService.prototype.deleteItem = function (article) {
        this.httpClient.post('deleteItem', {
            "item": article
        }).toPromise().then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.error(err);
        });
    };
    CartService.prototype.saveCart = function () {
        this.httpClient.post('/setCart', {
            "cart": this.cart
        }).toPromise().then(function (res) {
            console.log(res);
        });
    };
    CartService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;


/***/ }),

/***/ "./src/app/services/chat/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var message_1 = __webpack_require__("./src/app/classes/message.ts");
var user_service_1 = __webpack_require__("./src/app/services/user/user.service.ts");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var ChatService = /** @class */ (function () {
    function ChatService(userService) {
        this.userService = userService;
        this.username = '';
        this.messages = [
            new message_1.Message('Öffentlich', 'Hier werden deine Nachrichten von allen Nutzern gesehen.' +
                ' Oder klicke auf einen Namen, um dieser Person eine Privatnachricht zu senden. ', 'all', true)
        ];
        this.userID = '';
        this.privateMessageName = 'all';
        this.pm = false;
        this.showChat = false;
        this.clientList = [];
        this.firstOpen = true;
        this.unreadMessages = false;
    }
    ChatService.prototype.sendMessage = function () {
        if (this.privateMessageName != 'all') {
            this.messages.push(new message_1.Message(this.username, this.message, this.privateMessageName, this.pm));
        }
        var data = new message_1.Message(this.username, this.message, this.privateMessageName, this.pm);
        this.socket.emit('chat', data);
        this.privateMessageName = 'all';
        this.pm = false;
        this.message = null;
    };
    ChatService.prototype.setPmName = function (data) {
        if (this.privateMessageName == 'all') {
            this.privateMessageName = data;
        }
        else {
            this.privateMessageName = 'all';
        }
        this.pm = (this.pm ? this.pm = false : this.pm = true);
        this.showChat = true;
    };
    ChatService.prototype.toggleChat = function () {
        var _this = this;
        if (this.firstOpen) {
            this.firstOpen = false;
            this.userService.showProfileData()
                .subscribe(function (data) {
                _this.username = data.displayName;
                _this.socket = io.connect(window.location.protocol + '//' + window.location.host);
                _this.socket.emit('socket_info', { userID: _this.userID, username: _this.username });
                _this.socket.on('getClientList', function (data) {
                    _this.clientList.splice(0, _this.clientList.length);
                    for (var i = 0; i < data.length; i++) {
                        _this.clientList.push(data[i].username);
                    }
                    console.log(_this.clientList);
                });
                _this.socket.on('chat', function (data) {
                    if (!_this.showChat) {
                        _this.counter += 1;
                        _this.unreadMessages = true;
                    }
                    _this.messages.push(data);
                    console.log(_this.messages);
                });
            }, function (err) {
                console.log("Error getProfileData()", err);
            });
        }
        this.showChat = (this.showChat ? this.showChat = false : this.showChat = true);
        this.unreadMessages = false;
        this.counter = 0;
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;


/***/ }),

/***/ "./src/app/services/shop/shop.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ShopService = /** @class */ (function () {
    function ShopService(http) {
        this.http = http;
        this.getAllArticles();
    }
    ShopService_1 = ShopService;
    ShopService.prototype.getAllArticles = function () {
        var _this = this;
        this.http.get('/allArticles').toPromise()
            .then(function (data) {
            _this.articles = data.allArticles;
        }).catch(function (err) { return ShopService_1.handleError(err); });
    };
    ShopService.prototype.showArticles = function () {
        return this.articles;
    };
    ShopService.handleError = function (error) {
        console.error("Fehler: " + error.message);
    };
    ShopService = ShopService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ShopService);
    return ShopService;
    var ShopService_1;
}());
exports.ShopService = ShopService;


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var of_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {};
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.userURL = ''; // starting URL dirceting to user
    }
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed: " + error.message); // transforming error for better user consumption
            return of_1.of(result); // Let the app keep running by returning an empty result.
        };
    };
    UserService.prototype.getUser = function (userId) {
        console.log("übergebene userId", userId);
        var url = this.userURL + "/user/" + userId;
        return this.http.get(url)
            .pipe(operators_1.tap(function (result) {
            console.log("Users from Database are:", result);
            return result;
        }), operators_1.catchError(this.handleError("User nicht gefunden")));
    };
    UserService.prototype.addUser = function (user) {
        console.log("User in Service:", user);
        var url = this.userURL + "/user";
        return this.http.post(url, user, httpOptions)
            .pipe(operators_1.tap(function (newUser) {
            console.log("New user in Database: ", newUser);
            return newUser;
        }));
    };
    UserService.prototype.editUser = function (userToEdit) {
        console.log("editUser().key:", userToEdit.key);
        var url = 'https://localhost:8443/userUpdate';
        return this.http.put(url, userToEdit, httpOptions)
            .subscribe(function () {
            console.log("User successfully updated.");
        }, function (err) {
            console.log('Error:', err);
        });
    };
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        var url = 'https://localhost:8443/userDelete';
        return this.http.post(url, user)
            .subscribe(function (data) {
            console.log("Deleting user worked.");
            _this.router.navigateByUrl("/login");
        }, function (err) {
            console.log('Error:', err);
        });
    };
    UserService.prototype.showProfileData = function () {
        var url = this.userURL + "/userProfile";
        return this.http.get(url).pipe(operators_1.tap(function (user) {
            console.log("Datenabfrage showProfileData() worked");
        }), operators_1.catchError(this.handleError('Userdaten konnten nicht geladen werden.')));
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map