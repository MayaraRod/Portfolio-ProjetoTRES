import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrecoProvider } from '../../providers/preco/preco';

/**
 * Generated class for the MassasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-massas',
  templateUrl: 'massas.html',
})
export class MassasPage {
  precos:any[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private precoProvider:PrecoProvider) {
  }
  
  ionViewDidLoad() {
     this.precoProvider.precosJson()
          .subscribe(dados => this.precos = dados)
   }

}
