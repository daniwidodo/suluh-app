import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastSearchPageRoutingModule } from './podcast-search-routing.module';

import { PodcastSearchPage } from './podcast-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastSearchPageRoutingModule
  ],
  declarations: [PodcastSearchPage]
})
export class PodcastSearchPageModule {}
