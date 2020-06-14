import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelterAnimalDetailPageRoutingModule } from './shelter-animal-detail-page-routing.module';
import { ShelterAnimalDetailPageComponent } from './shelter-animal-detail-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { PhotoViewerModule } from '../photo-viewer/photo-viewer.module';
import { CardsModule } from '../cards/cards.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [ShelterAnimalDetailPageComponent],
  imports: [
    CommonModule,
    ShelterAnimalDetailPageRoutingModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    PhotoViewerModule,
    CardsModule,
    MatExpansionModule,
    MatListModule,
    FormsModule,
  ],
})
export class ShelterAnimalDetailPageModule {
}
