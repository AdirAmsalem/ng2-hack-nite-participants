var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var gallery_1 = require('./components/gallery/gallery');
var FacebookAPI_1 = require('./services/FacebookAPI');
var App = (function () {
    function App(facebookAPI) {
        this.facebookAPI = facebookAPI;
        this.configureFacebookAPI();
    }
    App.prototype.configureFacebookAPI = function () {
        var accessToken = localStorage.getItem('facebookAccessToken');
        this.facebookAPI.setAccessToken(accessToken);
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            bindings: [FacebookAPI_1.FacebookAPI]
        }),
        router_1.RouteConfig([
            { path: '/', component: gallery_1.Gallery, as: 'gallery' }
        ]),
        angular2_1.View({
            template: "\n    <section>\n      <router-outlet></router-outlet>\n    </section>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [FacebookAPI_1.FacebookAPI])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.ROUTER_BINDINGS, http_1.HTTP_BINDINGS]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuY29uZmlndXJlRmFjZWJvb2tBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFDN0QsdUJBQThELGlCQUFpQixDQUFDLENBQUE7QUFDaEYscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHdCQUFzQiw4QkFBOEIsQ0FBQyxDQUFBO0FBRXJELDRCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBRW5EO0lBaUJFQSxhQUFvQkEsV0FBdUJBO1FBQXZCQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFDekNBLElBQUlBLENBQUNBLG9CQUFvQkEsRUFBRUEsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBRU9ELGtDQUFvQkEsR0FBNUJBO1FBQ0VFLElBQUlBLFdBQVdBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7UUFDOURBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQXhCSEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFFBQVFBLEVBQUVBLENBQUNBLHlCQUFXQSxDQUFDQTtTQUN4QkEsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLGlCQUFPQSxFQUFFQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFDQTtTQUMvQ0EsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsNEVBSVRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDaENBLENBQUNBOztZQVdEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQXpCQSxBQXlCQ0EsSUFBQTtBQUVELG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQWUsRUFBRSxvQkFBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5JztcbmltcG9ydCB7UGFydGljaXBhbnRMaXN0fSBmcm9tICcuL3NlcnZpY2VzL1BhcnRpY2lwYW50TGlzdCc7XG5pbXBvcnQge0ZhY2Vib29rQVBJfSBmcm9tICcuL3NlcnZpY2VzL0ZhY2Vib29rQVBJJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgYmluZGluZ3M6IFtGYWNlYm9va0FQSV1cbn0pXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IEdhbGxlcnksIGFzOiAnZ2FsbGVyeSd9XG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuY2xhc3MgQXBwIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhY2Vib29rQVBJOkZhY2Vib29rQVBJKSB7XG4gICAgdGhpcy5jb25maWd1cmVGYWNlYm9va0FQSSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVGYWNlYm9va0FQSSgpIHtcbiAgICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmFjZWJvb2tBY2Nlc3NUb2tlbicpO1xuICAgIHRoaXMuZmFjZWJvb2tBUEkuc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pO1xuICB9XG59XG5cbmJvb3RzdHJhcChBcHAsIFtST1VURVJfQklORElOR1MsIEhUVFBfQklORElOR1NdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==