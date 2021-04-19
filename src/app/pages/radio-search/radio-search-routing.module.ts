import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioSearchPage } from './radio-search.page';

const routes: Routes = [
  {
    path: '',
    component: RadioSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioSearchPageRoutingModule {}
