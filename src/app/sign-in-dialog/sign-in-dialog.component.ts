import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.isAuth$.subscribe((isAuth) => {
      if (isAuth) {
        this.close();
      }
    });
  }

  close() {
    this.dialogRef.close();
  }

}
