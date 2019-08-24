import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheeseburgersPage } from './cheeseburgers';

@NgModule({
  declarations: [
    CheeseburgersPage,
  ],
  imports: [
    IonicPageModule.forChild(CheeseburgersPage),
  ],
})
export class CheeseburgersPageModule {}
