import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage {

  constructor(private navCtrl:NavController) {}

  login(){
    this.navCtrl.navigateForward("login");
  }

}
