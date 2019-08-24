import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrecoProvider } from '../../providers/preco/preco';

/**
 * Generated class for the SaladasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saladas',
  templateUrl: 'saladas.html',
})
export class SaladasPage {
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
