import { Component, Renderer, NgZone } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import ChallengeHandler from '../../componentScripts/challengeHandler';
import { MainPage } from '../Main/Main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public dataStore: DataStore
  ) {
    this.challengeHandlerComponent = new ChallengeHandler(
      this.securityCheckName,
      err => {
        if (!err) {
          this.navCtrl.push(this.challHandlerSuccessPage);
        }
      }
    );
  }

  challengeHandlerComponent: ChallengeHandler;
  username: string;
  password: string;

  login() {
    this.challengeHandlerComponent.login(this.username, this.password);
  }

  securityCheckName = 'UserLogin';
  challHandlerSuccessPage = MainPage;
}
