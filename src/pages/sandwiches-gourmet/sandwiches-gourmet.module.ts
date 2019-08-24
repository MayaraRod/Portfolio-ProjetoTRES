import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SandwichesGourmetPage } from './sandwiches-gourmet';

@NgModule({
  declarations: [
    SandwichesGourmetPage,
  ],
  imports: [
    IonicPageModule.forChild(SandwichesGourmetPage),
  ],
})
export class SandwichesGourmetPageModule {}
