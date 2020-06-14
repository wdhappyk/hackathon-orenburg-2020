import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelterAnimalsPageRoutingModule } from './shelter-animals-page-routing.module';
import { ShelterAnimalsPageComponent } from './shelter-animals-page.component';


@NgModule({
  declarations: [ShelterAnimalsPageComponent],
  imports: [
    CommonModule,
    ShelterAnimalsPageRoutingModule
  ]
})
export class ShelterAnimalsPageModule { }
