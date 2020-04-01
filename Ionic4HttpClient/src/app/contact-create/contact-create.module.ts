import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactCreatePageRoutingModule } from './contact-create-routing.module';

import { ContactCreatePage } from './contact-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactCreatePageRoutingModule
  ],
  declarations: [ContactCreatePage]
})
export class ContactCreatePageModule {}
