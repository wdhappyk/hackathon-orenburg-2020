import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonErrorStateMatcher } from '../error-state-matchers/common-error-state-matcher';
import { phoneValidator } from '../form-validators/phone-validator';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  signInForm = this.fb.group({
    phone: ['(___) ___-__-__', phoneValidator],
  });
  commonErrorStateMatcher = new CommonErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }


  onPhoneChanged() {
    const format = (size: number, value: string): string => {
       return Array(size)
         .fill('_')
         .map((c, i) => value.charAt(i) || c)
         .join('');
    };

    const phone = [...this.signInForm.controls.phone.value.matchAll(/\d*/g)].map(([n]) => n).join('');
    const formattedPhone = `(${format(3, phone.slice(0,4))}) ${format(3, phone.slice(4,8))}-${format(2, phone.slice(8,10))}-${format(3, phone.slice(10,12))}`;
    this.signInForm.controls.phone.setValue(formattedPhone);
  }

}
