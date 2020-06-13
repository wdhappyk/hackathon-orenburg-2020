import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapPageRoutingModule } from './map-page-routing.module';
import { MapPageComponent } from './map-page.component';


@NgModule({
  declarations: [MapPageComponent],
  imports: [
    CommonModule,
    MapPageRoutingModule
  ]
})
export class MapPageModule { }
