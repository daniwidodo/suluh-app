import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioListsPageRoutingModule } from './radio-lists-routing.module';

import { RadioListsPage } from './radio-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioListsPageRoutingModule
  ],
  declarations: [RadioListsPage]
})
export class RadioListsPageModule {}
