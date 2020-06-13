import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmDialogData {
  title?: string;
  content?: string;
  buttons?: {
    yes?: string;
    no?: string;
  },
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {

  title = '';
  content = '';
  buttons = {
    yes: 'Да',
    no: 'Нет',
  };

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ConfirmDialogData,
  ) {
    if (data.title) {
      this.title = data.title;
    }
    if (data.content) {
      this.content = data.content;
    }
    if (data.buttons) {
      if (data.buttons.yes) {
        this.buttons.yes = data.buttons.yes;
      }
      if (data.buttons.no) {
        this.buttons.no = data.buttons.no;
      }
    }
  }

}

