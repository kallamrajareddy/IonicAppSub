import { AuthServices } from './../../authservice/auth-service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController, NavController, NavParams, MenuController } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  notif = NotificationPage;  

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController, public auth: AuthServices, public navCtrl: NavController, public menu: MenuController, public navParams: NavParams) {
    // used for an example of ngFor and navigation
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    //this.menu.enable(false);
    }
    
    ionViewWillLeave() {
    // enable the root left menu when leaving this page
    //this.menu.enable(true);
    }
    
    
    onSignin(form: NgForm){

      const loading = this.loadingCtrl.create({
        content: 'Signing you in...'
      });
      loading.present();

      if(form.value.email == 'admin' && form.value.password == 'admin'){
        setTimeout(()=>{
          this.auth.setAuthentication(false);
          this.auth.setPages(false);
          loading.dismiss();
          this.auth.saveUsr(form.value.email, form.value.password);
          this.navCtrl.setRoot(this.notif);
          //this.menuCtrl.close();
        }, 3000);
      }else{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: 'please enter proper username & password',
          buttons: ['Ok']
        });
        alert.present();
        form.reset();
        
      }
     
      
    }
 
}
