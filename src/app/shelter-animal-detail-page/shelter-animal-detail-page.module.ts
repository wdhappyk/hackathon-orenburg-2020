import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelterAnimalDetailPageRoutingModule } from './shelter-animal-detail-page-routing.module';
import { ShelterAnimalDetailPageComponent } from './shelter-animal-detail-page.component';


@NgModule({
  declarations: [ShelterAnimalDetailPageComponent],
  imports: [
    CommonModule,
    ShelterAnimalDetailPageRoutingModule
  ]
})
export class ShelterAnimalDetailPageModule { }
