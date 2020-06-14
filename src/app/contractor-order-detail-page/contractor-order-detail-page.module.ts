import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorOrderDetailPageRoutingModule } from './contractor-order-detail-page-routing.module';
import { ContractorOrderDetailPageComponent } from './contractor-order-detail-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardsModule } from '../cards/cards.module';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [ContractorOrderDetailPageComponent],
  imports: [
    CommonModule,
    ContractorOrderDetailPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    CardsModule,
    PhotoViewerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule,
  ],
})
export class ContractorOrderDetailPageModule {
}
