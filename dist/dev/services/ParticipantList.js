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
                    imageUrl: "https://graph.facebook.com/" + participant['id'] + "/picture?type=large"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhcnRpY2lwYW50TGlzdC50cyJdLCJuYW1lcyI6WyJQYXJ0aWNpcGFudExpc3QiLCJQYXJ0aWNpcGFudExpc3QuY29uc3RydWN0b3IiLCJQYXJ0aWNpcGFudExpc3QuZ2V0UGFydGljaXBhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRzdDLDRCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQztJQUlFQSx5QkFBb0JBLFdBQXVCQTtRQUF2QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO1FBRnBDQSxpQkFBWUEsR0FBa0JBLEVBQUVBLENBQUNBO1FBR3RDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFFT0QseUNBQWVBLEdBQXZCQTtRQUFBRSxpQkFVQ0E7UUFUQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTthQUNoREEsT0FBT0EsQ0FBQ0EsVUFBQUEsR0FBR0E7WUFDVkEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsV0FBV0E7Z0JBQzdCQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDckJBLElBQUlBLEVBQUVBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBO29CQUN6QkEsUUFBUUEsRUFBRUEsZ0NBQThCQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSx3QkFBcUJBO2lCQUMvRUEsQ0FBQ0EsQ0FBQ0E7WUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFsQkhGO1FBQUNBLHFCQUFVQSxFQUFFQTs7d0JBbUJaQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7QUFsQlksdUJBQWUsa0JBa0IzQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1BhcnRpY2lwYW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge0lQYXJ0aWNpcGFudH0gZnJvbSAnLi9JUGFydGljaXBhbnQnO1xuaW1wb3J0IHtGYWNlYm9va0FQSX0gZnJvbSAnLi9GYWNlYm9va0FQSSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXJ0aWNpcGFudExpc3Qge1xuICBwdWJsaWMgcGFydGljaXBhbnRzOklQYXJ0aWNpcGFudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYWNlYm9va0FQSTpGYWNlYm9va0FQSSkge1xuICAgIHRoaXMuZ2V0UGFydGljaXBhbnRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhcnRpY2lwYW50cygpIHtcbiAgICB0aGlzLmZhY2Vib29rQVBJLmdldEdyb3VwTWVtYmVycygnNjU1MTMzNzI3OTU2NTcwJylcbiAgICAgIC5mb3JFYWNoKHJlcyA9PiB7XG4gICAgICAgIHJlc1snZGF0YSddLmZvckVhY2gocGFydGljaXBhbnQgPT4ge1xuICAgICAgICAgIHRoaXMucGFydGljaXBhbnRzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogcGFydGljaXBhbnRbJ25hbWUnXSxcbiAgICAgICAgICAgIGltYWdlVXJsOiBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJHtwYXJ0aWNpcGFudFsnaWQnXX0vcGljdHVyZT90eXBlPWxhcmdlYFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=