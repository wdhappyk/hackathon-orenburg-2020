import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonErrorStateMatcher } from '../error-state-matchers/common-error-state-matcher';
import { phoneValidator } from '../form-validators/phone-validator';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  signInForm = this.fb.group({
    phone: ['1234567890', [Validators.required, Validators.pattern(/\d{10}/)]],
  });
  commonErrorStateMatcher = new CommonErrorStateMatcher();

  societies = ['yandex', 'google', 'gosuslugi', 'vk', 'fb'];
  stepNumber = 0;
  codeSize = 4;
  countToResendCode = 300;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  nextStep() {
    if (this.signInForm.controls.phone.invalid) return;


    this.stepNumber++;


    interval(1000)
      .pipe(takeUntil(timer(301000)))
      .subscribe(() => {
        this.countToResendCode--;
      });
  }

}
