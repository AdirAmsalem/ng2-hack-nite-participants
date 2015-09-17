import {Injectable} from 'angular2/angular2';

import {IParticipant} from './IParticipant';
import {FacebookAPI} from './FacebookAPI';

@Injectable()
export class ParticipantList {
  public participants:IParticipant[] = [];

  constructor(private facebookAPI:FacebookAPI) {
    this.getParticipants();
  }

  private getParticipants() {
    this.facebookAPI.getGroupMembers('655133727956570')
      .forEach(res => {
        res['data'].forEach(participant => {
          this.participants.push({
            name: participant['name'],
            imageUrl: `https://graph.facebook.com/${participant['id']}/picture?type=large`,
            facebookUrl: `https://www.facebook.com/${participant['id']}`
          });
        });
      });
  }
}
