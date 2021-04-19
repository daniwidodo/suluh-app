import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioListsPage } from './radio-lists.page';

const routes: Routes = [
  {
    path: '',
    component: RadioListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioListsPageRoutingModule {}
