import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationTaskDetailPageRoutingModule } from './administration-task-detail-page-routing.module';
import { AdministrationTaskDetailPageComponent } from './administration-task-detail-page.component';


@NgModule({
  declarations: [AdministrationTaskDetailPageComponent],
  imports: [
    CommonModule,
    AdministrationTaskDetailPageRoutingModule
  ]
})
export class AdministrationTaskDetailPageModule { }
