import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  open(title, content, [buttonYes = null, buttonNo = null] = []): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title,
        content,
        buttons: {
          yes: buttonYes,
          no: buttonNo,
        },
      },
    });

    return dialogRef.afterClosed();
  }
}
