import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {ParticipantList} from '../../services/ParticipantList';
import {IParticipant} from '../../services/IParticipant';

@Component({
  selector: 'gallery',
  bindings: [ParticipantList]
})
@View({
  templateUrl: './components/gallery/gallery.html',
  directives: [CORE_DIRECTIVES]
})
export class Gallery {
  public participants:IParticipant[];

  constructor(private participantList:ParticipantList) {
    this.participants = participantList.participants;
  }
}
