import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationAppDetailPageRoutingModule } from './administration-app-detail-page-routing.module';
import { AdministrationAppDetailPageComponent } from './administration-app-detail-page.component';
import { MatCardModule } from '@angular/material/card';
import { CardsModule } from '../cards/cards.module';


@NgModule({
  declarations: [AdministrationAppDetailPageComponent],
  imports: [
    CommonModule,
    AdministrationAppDetailPageRoutingModule,
    MatCardModule,
    CardsModule,
  ],
})
export class AdministrationAppDetailPageModule { }
