import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationTaskDetailPageRoutingModule } from './administration-task-detail-page-routing.module';
import { AdministrationTaskDetailPageComponent } from './administration-task-detail-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CardsModule } from '../cards/cards.module';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [AdministrationTaskDetailPageComponent],
  imports: [
    CommonModule,
    AdministrationTaskDetailPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    CardsModule,
    PhotoViewerModule,
    MatNativeDateModule,
  ],
})
export class AdministrationTaskDetailPageModule {
}
