import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationAppsPageRoutingModule } from './administration-apps-page-routing.module';
import { AdministrationAppsPageComponent } from './administration-apps-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from '../cards/cards.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AdministrationAppsPageComponent],
  imports: [
    CommonModule,
    AdministrationAppsPageRoutingModule,
    FormsModule,
    CardsModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AdministrationAppsPageModule { }
