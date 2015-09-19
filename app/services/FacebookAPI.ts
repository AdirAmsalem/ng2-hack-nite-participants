import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class FacebookAPI {
  private accessToken:String;
  private basePath = 'https://graph.facebook.com/v2.4/';

  constructor(private http:Http) {
  }

  public setAccessToken(token:String) {
    this.accessToken = token;
  }

  public getGroupMembers(groupId:String) {
    let path = `${this.basePath}${groupId}/members?limit=999&access_token=${this.accessToken}`;

    // use a mock if there's no access token
    if (!this.accessToken) {
      path = 'https://api.myjson.com/bins/2ha0k';
    }

    return this.http.get(path)
      .toRx()
      .map(res => res.json());
  }
}
