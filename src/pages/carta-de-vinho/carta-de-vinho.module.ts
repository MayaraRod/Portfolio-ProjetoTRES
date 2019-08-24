import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartaDeVinhoPage } from './carta-de-vinho';

@NgModule({
  declarations: [
    CartaDeVinhoPage,
  ],
  imports: [
    IonicPageModule.forChild(CartaDeVinhoPage),
  ],
})
export class CartaDeVinhoPageModule {}
