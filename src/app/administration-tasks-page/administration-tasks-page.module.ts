import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationTasksPageRoutingModule } from './administration-tasks-page-routing.module';
import { AdministrationTasksPageComponent } from './administration-tasks-page.component';


@NgModule({
  declarations: [AdministrationTasksPageComponent],
  imports: [
    CommonModule,
    AdministrationTasksPageRoutingModule
  ]
})
export class AdministrationTasksPageModule { }
