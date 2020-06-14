import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorsPageRoutingModule } from './contractors-page-routing.module';
import { ContractorsPageComponent } from './contractors-page.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CardsModule } from '../cards/cards.module';


@NgModule({
  declarations: [ContractorsPageComponent],
  imports: [
    CommonModule,
    ContractorsPageRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CardsModule,
  ],
})
export class ContractorsPageModule { }
