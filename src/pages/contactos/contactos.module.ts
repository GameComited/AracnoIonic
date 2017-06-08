import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactosPage } from './contactos';

@NgModule({
  declarations: [
    ContactosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactosPage),
  ],
  exports: [
    ContactosPage
  ]
})
export class ContactosPageModule {}
