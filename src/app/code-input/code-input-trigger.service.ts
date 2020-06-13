import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeInputTriggerService {
  private trigger = new Subject<void>();
  get trigger$() {
    return this.trigger.asObservable();
  }

  constructor() { }

  triggerOnInput() {
    this.trigger.next();
  }
}
