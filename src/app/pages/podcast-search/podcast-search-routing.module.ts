import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastSearchPage } from './podcast-search.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastSearchPageRoutingModule {}
