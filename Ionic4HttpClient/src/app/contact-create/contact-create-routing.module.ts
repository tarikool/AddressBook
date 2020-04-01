import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactCreatePage } from './contact-create.page';

const routes: Routes = [
  {
    path: '',
    component: ContactCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactCreatePageRoutingModule {}
