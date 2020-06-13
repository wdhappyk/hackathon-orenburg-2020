import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public auth: AuthService,
  ) {
  }

  ngOnInit(): void {

  }

  openSignInDialog() {
    this.dialog.open(SignInDialogComponent);
  }

}
