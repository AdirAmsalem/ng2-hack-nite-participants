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
var http_1 = require('angular2/http');
var FacebookAPI = (function () {
    function FacebookAPI(http) {
        this.http = http;
        this.basePath = "https://graph.facebook.com/v2.4/";
    }
    FacebookAPI.prototype.setAccessToken = function (token) {
        this.accessToken = token;
    };
    FacebookAPI.prototype.getGroupMembers = function (groupId) {
        var path = "" + this.basePath + groupId + "/members?limit=999&access_token=" + this.accessToken;
        if (!this.accessToken) {
            path = 'https://api.myjson.com/bins/2ha0k';
        }
        return this.http.get(path)
            .toRx()
            .map(function (res) { return res.json(); });
    };
    FacebookAPI = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FacebookAPI);
    return FacebookAPI;
})();
exports.FacebookAPI = FacebookAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0ZhY2Vib29rQVBJLnRzIl0sIm5hbWVzIjpbIkZhY2Vib29rQVBJIiwiRmFjZWJvb2tBUEkuY29uc3RydWN0b3IiLCJGYWNlYm9va0FQSS5zZXRBY2Nlc3NUb2tlbiIsIkZhY2Vib29rQVBJLmdldEdyb3VwTWVtYmVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFFbkM7SUFLRUEscUJBQW9CQSxJQUFTQTtRQUFUQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFLQTtRQUZyQkEsYUFBUUEsR0FBR0Esa0NBQWtDQSxDQUFDQTtJQUd0REEsQ0FBQ0E7SUFFTUQsb0NBQWNBLEdBQXJCQSxVQUFzQkEsS0FBWUE7UUFDaENFLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBO0lBQzNCQSxDQUFDQTtJQUVNRixxQ0FBZUEsR0FBdEJBLFVBQXVCQSxPQUFjQTtRQUNuQ0csSUFBSUEsSUFBSUEsR0FBR0EsS0FBR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0Esd0NBQW1DQSxJQUFJQSxDQUFDQSxXQUFhQSxDQUFDQTtRQUczRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLElBQUlBLEdBQUdBLG1DQUFtQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBO2FBQ3ZCQSxJQUFJQSxFQUFFQTthQUNOQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUF2QkhIO1FBQUNBLHFCQUFVQSxFQUFFQTs7b0JBd0JaQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7QUF2QlksbUJBQVcsY0F1QnZCLENBQUEiLCJmaWxlIjoic2VydmljZXMvRmFjZWJvb2tBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWNlYm9va0FQSSB7XG4gIHByaXZhdGUgYWNjZXNzVG9rZW46U3RyaW5nO1xuICBwcml2YXRlIGJhc2VQYXRoID0gXCJodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92Mi40L1wiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XG4gIH1cblxuICBwdWJsaWMgc2V0QWNjZXNzVG9rZW4odG9rZW46U3RyaW5nKSB7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IHRva2VuO1xuICB9XG5cbiAgcHVibGljIGdldEdyb3VwTWVtYmVycyhncm91cElkOlN0cmluZykge1xuICAgIGxldCBwYXRoID0gYCR7dGhpcy5iYXNlUGF0aH0ke2dyb3VwSWR9L21lbWJlcnM/bGltaXQ9OTk5JmFjY2Vzc190b2tlbj0ke3RoaXMuYWNjZXNzVG9rZW59YDtcblxuICAgIC8vIHVzZSBhIG1vY2sgaWYgdGhlcmUncyBubyBhY2Nlc3MgdG9rZW5cbiAgICBpZiAoIXRoaXMuYWNjZXNzVG9rZW4pIHtcbiAgICAgIHBhdGggPSAnaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zLzJoYTBrJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKVxuICAgICAgLnRvUngoKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==