import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardapioPage } from '../cardapio/cardapio';
import { PromocaoPage } from '../promocao/promocao';
import { ContatoPage } from '../contato/contato';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  cardapio() {
    this.navCtrl.push(CardapioPage);
  }

  promocao() {
    this.navCtrl.push(PromocaoPage);
  }

  contato() {
    this.navCtrl.push(ContatoPage); 
  }

  sobre() {
    this.navCtrl.push(SobrePage);
  }
}
