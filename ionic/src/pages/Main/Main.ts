import { Component, Renderer, NgZone } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { MyPlanPage } from '../MyPlan/MyPlan';
import { ChatPage } from '../Chat/Chat';

@Component({
  selector: 'page-Main',
  templateUrl: 'Main.html'
})
export class MainPage {
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public dataStore: DataStore
  ) {}

  hubcards: {
    title: string;
    desc: string;
    navigatePage: object;
    icon: string;
  }[] = [
    {
      title: 'My Account',
      desc: 'View your account information here',
      navigatePage: MyPlanPage,
      icon: 'icon.png'
    },
    {
      title: 'Service Request',
      desc:
        'Create a new service request or view status of your service requests',
      navigatePage: null,
      icon: 'icon.png'
    },
    {
      title: 'Benefits',
      desc: 'Check all benefits you can avail here',
      navigatePage: null,
      icon: 'icon.png'
    },
    {
      title: 'Help',
      desc: 'Get all your queries answered by our friendly bot Chatty',
      navigatePage: ChatPage,
      icon: 'icon.png'
    }
  ];

  // use it for navigation in hub pages
  navigateFromHubCard(page) {
    this.navCtrl.push(page, {});
  }

  username = (this.dataStore as any).username || 'USER';

  ionViewDidLoad() {
    WL.Analytics.log(
      {
        fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name,
        toPage: this.navCtrl.getActive().name
      },
      'PageTransition '
    );
    WL.Analytics.send();
      WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
  }
}
