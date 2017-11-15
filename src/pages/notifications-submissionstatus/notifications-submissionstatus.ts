import { Component } from '@angular/core';
import {  LoadingController, NavController, NavParams } from 'ionic-angular';

import { submissonStore, SubmissionObj } from '../../store/submissionStore';
import { NotificationPage } from './../notifications/notifications';



@Component({
  selector: 'page-notifications-submissionstatus',
  templateUrl: 'notifications-submissionstatus.html',
})
export class NotificationsSubmissionstatusPage {

  subObj: SubmissionObj;
  selectedStat: string;  
  notifiy = NotificationPage; 

  constructor(private loadingCtrl: LoadingController, public subStore: submissonStore, public navCtrl: NavController, public navParams: NavParams) {
    //this.subObj = navParams.get('sub');
    //this.selectedStat = this.subObj.selectedStat;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsSubmissionstatusPage');
  }

  logForm(){

    this.subStore.processedSub(this.subStore.getSelLst());
    const loading = this.loadingCtrl.create({
      content: 'Processing ...'
    });
    loading.present();

    
      setTimeout(()=>{
        
        loading.dismiss();
        this.navCtrl.setRoot(this.notifiy);
      }, 3000);

    
  }

}
