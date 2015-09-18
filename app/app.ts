import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {Gallery} from './components/gallery/gallery';
import {ParticipantList} from './services/ParticipantList';
import {FacebookAPI} from './services/FacebookAPI';

@Component({
  selector: 'app',
  bindings: [FacebookAPI]
})
@RouteConfig([
  {path: '/', component: Gallery, as: 'gallery'}
])
@View({
  templateUrl: './app.html',
  directives: [ROUTER_DIRECTIVES]
})
class App {

  constructor(private facebookAPI:FacebookAPI) {
    this.configureFacebookAPI();
  }

  private configureFacebookAPI() {
    let accessToken = localStorage.getItem('facebookAccessToken');
    this.facebookAPI.setAccessToken(accessToken);
  }
}

bootstrap(App, [ROUTER_BINDINGS, HTTP_BINDINGS]);
