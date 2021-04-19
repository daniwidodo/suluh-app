import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioSearchPageRoutingModule } from './radio-search-routing.module';

import { RadioSearchPage } from './radio-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioSearchPageRoutingModule
  ],
  declarations: [RadioSearchPage]
})
export class RadioSearchPageModule {}
