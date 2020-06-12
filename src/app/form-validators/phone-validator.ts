import { AbstractControl } from '@angular/forms';

export const phoneRegExp = /^\+\d\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2} | \d{10}$/;

export function phoneValidator(control: AbstractControl): {[key: string]: any} | null {
  return phoneRegExp.test(control.value) ? null : { forbiddenPhone: control.value };
}
