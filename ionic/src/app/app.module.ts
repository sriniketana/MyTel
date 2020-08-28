import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page2Page } from "../pages/Page2/Page2";
import { MainPage } from "../pages/Main/Main";
import { MyPlanPage } from "../pages/MyPlan/MyPlan";
import { ChatPage } from "../pages/Chat/Chat";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,Page2Page,MainPage,MyPlanPage,ChatPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,Page2Page,MainPage,MyPlanPage,ChatPage],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
