import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeixePage } from './peixe';

@NgModule({
  declarations: [
    PeixePage,
  ],
  imports: [
    IonicPageModule.forChild(PeixePage),
  ],
})
export class PeixePageModule {}
