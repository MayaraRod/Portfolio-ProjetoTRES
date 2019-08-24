import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { SobrePage } from '../pages/sobre/sobre';
import { PromocaoPage } from '../pages/promocao/promocao';
import { ContatoPage } from '../pages/contato/contato';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { SaladasPage } from '../pages/saladas/saladas';
import { MassasPage } from '../pages/massas/massas';
import { PeixePage } from '../pages/peixe/peixe';
import { CheeseburgersPage } from '../pages/cheeseburgers/cheeseburgers';
import { SandwichesGourmetPage } from '../pages/sandwiches-gourmet/sandwiches-gourmet';
import { AcompanhamentosPage } from '../pages/acompanhamentos/acompanhamentos';
import { CartaDeVinhoPage } from '../pages/carta-de-vinho/carta-de-vinho';
import { HappyHourPage } from '../pages/happy-hour/happy-hour';
import { BebidasAlcoolicasPage } from '../pages/bebidas-alcoolicas/bebidas-alcoolicas';
import { EntradasPage } from '../pages/entradas/entradas';
import { FrangoPage } from '../pages/frango/frango';
import { CarnesPage } from '../pages/carnes/carnes';
import { SandWichesFitPage } from '../pages/sand-wiches-fit/sand-wiches-fit';
import { KidsPage } from '../pages/kids/kids';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { PrecoProvider } from '../providers/preco/preco';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardapioPage,
    SobrePage,
    PromocaoPage,
    ContatoPage,
    BebidasPage,
    SaladasPage,
    MassasPage,
    PeixePage,
    CheeseburgersPage,
    SandwichesGourmetPage,
    AcompanhamentosPage,
    CartaDeVinhoPage,
    HappyHourPage,
    BebidasAlcoolicasPage,
    EntradasPage,
    FrangoPage,
    CarnesPage,
    SandWichesFitPage,
    KidsPage,
    SobremesasPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CardapioPage,
    SobrePage,
    PromocaoPage,
    ContatoPage,
    BebidasPage,
    SaladasPage,
    MassasPage,
    PeixePage,
    CheeseburgersPage,
    SandwichesGourmetPage,
    AcompanhamentosPage,
    CartaDeVinhoPage,
    HappyHourPage,
    BebidasAlcoolicasPage,
    EntradasPage,
    FrangoPage,
    CarnesPage,
    SandWichesFitPage,
    KidsPage,
    SobremesasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrecoProvider
  ]
})
export class AppModule {}
