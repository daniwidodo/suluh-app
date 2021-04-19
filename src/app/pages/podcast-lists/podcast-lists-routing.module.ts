import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastListsPage } from './podcast-lists.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastListsPageRoutingModule {}
