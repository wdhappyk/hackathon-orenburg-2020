import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { StepperComponent } from './stepper/stepper.component';
import { CodeInputComponent } from './code-input/code-input.component';
import { TextMaskModule } from 'angular2-text-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInFormComponent,
    SignInDialogComponent,
    StepperComponent,
    CodeInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    TextMaskModule,
    MatSnackBarModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
