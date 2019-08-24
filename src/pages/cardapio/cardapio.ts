import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';
import { SaladasPage } from '../saladas/saladas';
import { MassasPage } from '../massas/massas';
import { PeixePage } from '../peixe/peixe';
import { CheeseburgersPage } from '../cheeseburgers/cheeseburgers';
import { SandwichesGourmetPage } from '../sandwiches-gourmet/sandwiches-gourmet';
import { AcompanhamentosPage } from '../acompanhamentos/acompanhamentos';
import { CartaDeVinhoPage } from '../carta-de-vinho/carta-de-vinho';
import { HappyHourPage } from '../happy-hour/happy-hour';
import { BebidasAlcoolicasPage } from '../bebidas-alcoolicas/bebidas-alcoolicas';
import { EntradasPage } from '../entradas/entradas';
import { FrangoPage } from '../frango/frango';
import { CarnesPage } from '../carnes/carnes';
import { SandWichesFitPage } from '../sand-wiches-fit/sand-wiches-fit';
import { SobremesasPage } from '../sobremesas/sobremesas';
import { KidsPage } from '../kids/kids';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  bebidas(){
    this.navCtrl.push(BebidasPage)
  }
  saladas(){
    this.navCtrl.push(SaladasPage)
  }
  massas(){
    this.navCtrl.push(MassasPage)
  }
  peixe(){
    this.navCtrl.push(PeixePage)
  }
  Cheeseburgers(){
    this.navCtrl.push(CheeseburgersPage)
  }
  SandwichesGourmet(){
    this.navCtrl.push(SandwichesGourmetPage)
  }
  acompanhamentos(){
    this.navCtrl.push(AcompanhamentosPage)
  }
  cartaDeVinho(){
    this.navCtrl.push(CartaDeVinhoPage)
  }
  HappyHour(){
    this.navCtrl.push(HappyHourPage)
  }
  BebidasAlcoolicas(){
    this.navCtrl.push(BebidasAlcoolicasPage)
  }
  entradas(){
    this.navCtrl.push(EntradasPage)
  }
  frango(){
    this.navCtrl.push(FrangoPage)
  }
  carnes(){
    this.navCtrl.push(CarnesPage)
  }
  SandwichesFit(){
    this.navCtrl.push(SandWichesFitPage)
  }
  kids(){
    this.navCtrl.push(KidsPage)
  }
  sobremesas(){
    this.navCtrl.push(SobremesasPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
