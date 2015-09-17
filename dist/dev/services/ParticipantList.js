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
var FacebookAPI_1 = require('./FacebookAPI');
var ParticipantList = (function () {
    function ParticipantList(facebookAPI) {
        this.facebookAPI = facebookAPI;
        this.participants = [];
        this.getParticipants();
    }
    ParticipantList.prototype.getParticipants = function () {
        var _this = this;
        this.facebookAPI.getGroupMembers('655133727956570')
            .forEach(function (res) {
            res['data'].forEach(function (participant) {
                _this.participants.push({
                    name: participant['name'],
                    imageUrl: "https://graph.facebook.com/" + participant['id'] + "/picture?type=large",
                    facebookUrl: "https://www.facebook.com/" + participant['id']
                });
            });
        });
    };
    ParticipantList = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [FacebookAPI_1.FacebookAPI])
    ], ParticipantList);
    return ParticipantList;
})();
exports.ParticipantList = ParticipantList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhcnRpY2lwYW50TGlzdC50cyJdLCJuYW1lcyI6WyJQYXJ0aWNpcGFudExpc3QiLCJQYXJ0aWNpcGFudExpc3QuY29uc3RydWN0b3IiLCJQYXJ0aWNpcGFudExpc3QuZ2V0UGFydGljaXBhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRzdDLDRCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQztJQUlFQSx5QkFBb0JBLFdBQXVCQTtRQUF2QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO1FBRnBDQSxpQkFBWUEsR0FBa0JBLEVBQUVBLENBQUNBO1FBR3RDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFT0QseUNBQWVBLEdBQXZCQTtRQUFBRSxpQkFXQ0E7UUFWQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTthQUNoREEsT0FBT0EsQ0FBQ0EsVUFBQUEsR0FBR0E7WUFDVkEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsV0FBV0E7Z0JBQzdCQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDckJBLElBQUlBLEVBQUVBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBO29CQUN6QkEsUUFBUUEsRUFBRUEsZ0NBQThCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSx3QkFBcUJBO29CQUM5RUEsV0FBV0EsRUFBRUEsOEJBQTRCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFHQTtpQkFDN0RBLENBQUNBLENBQUNBO1lBQ0xBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBbkJIRjtRQUFDQSxxQkFBVUEsRUFBRUE7O3dCQW9CWkE7SUFBREEsc0JBQUNBO0FBQURBLENBcEJBLEFBb0JDQSxJQUFBO0FBbkJZLHVCQUFlLGtCQW1CM0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9QYXJ0aWNpcGFudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtJUGFydGljaXBhbnR9IGZyb20gJy4vSVBhcnRpY2lwYW50JztcbmltcG9ydCB7RmFjZWJvb2tBUEl9IGZyb20gJy4vRmFjZWJvb2tBUEknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFydGljaXBhbnRMaXN0IHtcbiAgcHVibGljIHBhcnRpY2lwYW50czpJUGFydGljaXBhbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFjZWJvb2tBUEk6RmFjZWJvb2tBUEkpIHtcbiAgICB0aGlzLmdldFBhcnRpY2lwYW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJ0aWNpcGFudHMoKSB7XG4gICAgdGhpcy5mYWNlYm9va0FQSS5nZXRHcm91cE1lbWJlcnMoJzY1NTEzMzcyNzk1NjU3MCcpXG4gICAgICAuZm9yRWFjaChyZXMgPT4ge1xuICAgICAgICByZXNbJ2RhdGEnXS5mb3JFYWNoKHBhcnRpY2lwYW50ID0+IHtcbiAgICAgICAgICB0aGlzLnBhcnRpY2lwYW50cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHBhcnRpY2lwYW50WyduYW1lJ10sXG4gICAgICAgICAgICBpbWFnZVVybDogYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLyR7cGFydGljaXBhbnRbJ2lkJ119L3BpY3R1cmU/dHlwZT1sYXJnZWAsXG4gICAgICAgICAgICBmYWNlYm9va1VybDogYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8ke3BhcnRpY2lwYW50WydpZCddfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9