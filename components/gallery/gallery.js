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
var ParticipantList_1 = require('../../services/ParticipantList');
var Gallery = (function () {
    function Gallery(participantList) {
        this.participantList = participantList;
        this.participants = participantList.participants;
    }
    Gallery = __decorate([
        angular2_1.Component({
            selector: 'gallery',
            bindings: [ParticipantList_1.ParticipantList]
        }),
        angular2_1.View({
            template: "\n    <ul class=\"participant-list\">\n        <li *ng-for=\"#participant of participants\" class=\"participant-list-item\">\n            <a href=\"{{participant.facebookUrl}}\" target=\"_blank\">\n                <img src=\"{{participant.imageUrl}}\" alt=\"{{participant.name}}\">\n            </a>\n\n            <span class=\"participant-name\">{{participant.name}}</span>\n        </li>\n    </ul>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ParticipantList_1.ParticipantList])
    ], Gallery);
    return Gallery;
})();
exports.Gallery = Gallery;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LnRzIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJHYWxsZXJ5LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRW5FLGdDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRy9EO0lBcUJFQSxpQkFBb0JBLGVBQStCQTtRQUEvQkMsb0JBQWVBLEdBQWZBLGVBQWVBLENBQWdCQTtRQUNqREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsZUFBZUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7SUFDbkRBLENBQUNBO0lBdkJIRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7WUFDbkJBLFFBQVFBLEVBQUVBLENBQUNBLGlDQUFlQSxDQUFDQTtTQUM1QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsUUFBUUEsRUFBRUEsdVpBVVRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTtTQUM5QkEsQ0FBQ0E7O2dCQU9EQTtJQUFEQSxjQUFDQTtBQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtBQU5ZLGVBQU8sVUFNbkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtQYXJ0aWNpcGFudExpc3R9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhcnRpY2lwYW50TGlzdCc7XG5pbXBvcnQge0lQYXJ0aWNpcGFudH0gZnJvbSAnLi4vLi4vc2VydmljZXMvSVBhcnRpY2lwYW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeScsXG4gIGJpbmRpbmdzOiBbUGFydGljaXBhbnRMaXN0XVxufSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgcHVibGljIHBhcnRpY2lwYW50czpJUGFydGljaXBhbnRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcnRpY2lwYW50TGlzdDpQYXJ0aWNpcGFudExpc3QpIHtcbiAgICB0aGlzLnBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50TGlzdC5wYXJ0aWNpcGFudHM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==