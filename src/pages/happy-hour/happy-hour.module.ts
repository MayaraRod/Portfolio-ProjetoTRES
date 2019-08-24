import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HappyHourPage } from './happy-hour';

@NgModule({
  declarations: [
    HappyHourPage,
  ],
  imports: [
    IonicPageModule.forChild(HappyHourPage),
  ],
})
export class HappyHourPageModule {}
