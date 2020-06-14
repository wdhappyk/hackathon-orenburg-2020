import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationAppDetailPageRoutingModule } from './administration-app-detail-page-routing.module';
import { AdministrationAppDetailPageComponent } from './administration-app-detail-page.component';
import { MatCardModule } from '@angular/material/card';
import { CardsModule } from '../cards/cards.module';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [AdministrationAppDetailPageComponent],
  imports: [
    CommonModule,
    AdministrationAppDetailPageRoutingModule,
    MatCardModule,
    CardsModule,
    PhotoViewerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AdministrationAppDetailPageModule {
}
