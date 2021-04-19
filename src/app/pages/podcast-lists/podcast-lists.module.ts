import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastListsPageRoutingModule } from './podcast-lists-routing.module';

import { PodcastListsPage } from './podcast-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastListsPageRoutingModule
  ],
  declarations: [PodcastListsPage]
})
export class PodcastListsPageModule {}
