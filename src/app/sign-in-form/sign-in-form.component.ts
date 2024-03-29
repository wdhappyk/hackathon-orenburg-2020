import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonErrorStateMatcher } from '../error-state-matchers/common-error-state-matcher';
import { phoneValidator } from '../form-validators/phone-validator';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CodeInputTriggerService } from '../code-input/code-input-trigger.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  signInForm = this.fb.group({
    phone: ['(555) 555-12-34', [Validators.required, Validators.pattern(/\(\d{3}\)\s\d{3}-\d{2}-\d{2}/)]],
  });
  commonErrorStateMatcher = new CommonErrorStateMatcher();

  societies = ['yandex', 'google', 'gosuslugi', 'vk', 'fb'];
  stepNumber = 0;
  codeSize = 4;
  countToResendCode = 300;
  mask = ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  code = '';

  constructor(
    private fb: FormBuilder,
    private codeInputTrigger: CodeInputTriggerService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  nextStep() {
    const isLastStep = this.stepNumber === 1;
    if (this.signInForm.controls.phone.invalid) return;
    if (isLastStep) {
      this.verifyCode();
      return;
    }

    this.stepNumber++;
    this.startResendTimer();
    this.codeInputTrigger.triggerOnInput();
  }

  isCodeValid() {
    return this.code.length === this.codeSize;
  }

  verifyCode() {
    if (!this.isCodeValid()) return;
    this.auth.verifyCode(this.code).subscribe((isCodeValid) => {
      if (isCodeValid) {
        this.trySignIn();
      } else {
        this.showInvalidCodeMessage();
      }
    })
  }

  onRecendCode() {
    this.startResendTimer();
  }

  sendCode() {
    //...
  }

  startResendTimer() {
    this.countToResendCode = 300;
    interval(1000)
      .pipe(takeUntil(timer(301000)))
      .subscribe(() => {
        this.countToResendCode--;
      });
  }


  setCode(code: string) {
    this.code = code;
  }

  private showSuccessMessage() {
    this.snackBar.open('Добро пожаловать!', null, {
      duration: 2000,
    });
  }

  private trySignIn() {
    this.auth.signIn(this.signInForm.controls.phone.value).subscribe({
      complete: () => {
        this.showSuccessMessage();
      },
    });
  }

  private showInvalidCodeMessage() {
    this.snackBar.open('Указан неверный код!', null, {
      duration: 2000,
    });
  }
}
