import { Component, Injector } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NotificationsSubmissionstatusPage } from '../notifications-submissionstatus/notifications-submissionstatus';
import { HomePage } from '../home/home';
import { submissonStore, SubmissionObj  } from '../../store/submissionStore';
import { AuthServices } from './../../authservice/auth-service';

@Component({
    selector: 'page-notifications',
    templateUrl: 'notifications.html'
  })
export class NotificationPage{

    public auth: AuthServices;
    public home: any = HomePage;
    public multCheck = true;

    constructor( public subStore: submissonStore, private loadingCtrl: LoadingController, private inj: Injector,  public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.auth = inj.get(AuthServices);
    }
  openStatus(sub: SubmissionObj){
    this.subStore.rmSelLst();
    this.subStore.setSelLst(sub);
    this.navCtrl.push(NotificationsSubmissionstatusPage);
  }
  multiple(sub: SubmissionObj){
    this.subStore.rmSelLst();
    this.subStore.setmultiCk(true);
    this.subStore.getSubList().forEach(subobj => {if(subobj.selected){
      this.subStore.setSelLst(subobj);
      this.subStore.setmultiCk(false);
    }
  });
    
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

mulSubSel(){
  this.navCtrl.push(NotificationsSubmissionstatusPage);
}
 
  cancelConfirm(sub: SubmissionObj) {
    
    let alert = this.alertCtrl.create();
    alert.setTitle('Reason for cancelation');
    alert.addInput({type: 'radio', label: 'Re-assign', value: '1', checked: true});
    alert.addInput({type: 'radio', label: 'Revert back', value: '2'});
    alert.addInput({type: 'radio', label: 'Test', value: '3'});
    alert.addInput({type: 'radio', label: 'View Later', value: '4'});
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        
       
        alert.dismiss();
        const loading = this.loadingCtrl.create({
          content: 'Processing ...'
        });
        loading.present();
    
        
          setTimeout(()=>{
            
            loading.dismiss();
            this.home = NotificationPage;
            this.subStore.rmSelLst();
            this.subStore.setSelLst(sub);
            this.subStore.processedSub( this.subStore.getSelLst());
            this.navCtrl.setRoot(this.home);
          }, 3000);
        return false;
      }

    });

    alert.present();

  }
  logOut(){
    const loading = this.loadingCtrl.create({
      content: 'Loging Off ...'
    });
    loading.present();

    
      setTimeout(()=>{
        this.auth.setAuthentication(true);
        this.auth.setPages(true);
        loading.dismiss();
        this.navCtrl.setRoot(this.home);
      }, 3000);

  }
}
