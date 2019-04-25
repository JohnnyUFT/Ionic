import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {SobrePage} from '../sobre/sobre.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sobrePage = SobrePage;

  constructor(public navCtrl: NavController) {

  }

}
