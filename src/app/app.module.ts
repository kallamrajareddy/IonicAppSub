import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NotificationPage } from '../pages/notifications/notifications';
import { TasksPage } from '../pages/tasks/tasks';
import { PreferencesPage } from '../pages/preferences/preferences';
import { DocumentsPage } from './../pages/documents/document';
import { EnquieryPage } from './../pages/enquirey/enquirey';
import { NotificationsSubmissionstatusPage } from './../pages/notifications-submissionstatus/notifications-submissionstatus';
import { AuthServices } from "./../authservice/auth-service";
import { submissonStore } from '../store/submissionStore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NotificationPage,
    EnquieryPage,
    DocumentsPage,
    PreferencesPage,
    TasksPage,
    NotificationsSubmissionstatusPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NotificationPage,
    EnquieryPage,
    DocumentsPage,
    PreferencesPage,
    TasksPage,
    NotificationsSubmissionstatusPage,
    LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServices,
    submissonStore
  ]
})
export class AppModule {}
