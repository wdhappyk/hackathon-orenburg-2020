import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonErrorStateMatcher } from '../error-state-matchers/common-error-state-matcher';
import { phoneValidator } from '../form-validators/phone-validator';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  signInForm = this.fb.group({
    phone: ['', Validators.pattern(/\d{10}/)],
  });
  commonErrorStateMatcher = new CommonErrorStateMatcher();

  societies = ['yandex', 'google', 'gosuslugi', 'vk', 'fb'];

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

}
