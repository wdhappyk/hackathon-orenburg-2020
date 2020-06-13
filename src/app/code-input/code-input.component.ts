import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],
})
export class CodeInputComponent implements OnInit {

  controls: FormControl[] = [];
  @ViewChildren('input') inputs: QueryList<ElementRef>;

  @Input() set size(n) {
    if (n > this.controls.length) {
      const prevLen = this.controls.length;
      const newControls = Array(n - this.controls.length).fill(1).map(() => new FormControl(''));
      this.controls.push(...newControls);
      newControls.forEach((control, idx) => {
        control.valueChanges.subscribe((v) => {
          if (v === '') {
            return;
          }

          const nextElemIdx = prevLen + idx + 1;
          const elems = this.inputs.toArray();

          elems[nextElemIdx]?.nativeElement.focus();
        });
      });
    }
    else if (n < this.controls.length) {
      this.controls = this.controls.slice(0, n);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onBackspace(control: FormControl) {
    if (control.value !== '') return;
    const idx = this.controls.indexOf(control);
    const prevIdx = Math.max(0, idx - 1);
    const elems = this.inputs.toArray();
    elems[prevIdx].nativeElement.focus();
  }

}
