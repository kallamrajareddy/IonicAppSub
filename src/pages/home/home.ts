import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menu.enable(true);
    }
  
}
