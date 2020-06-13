import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private dialog: MatDialog,
    private confirm: ConfirmDialogService,
  ) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.confirm.open('Подтвердите', 'Вы уверены, что хотите выйти?')
      .subscribe((confirmed) => {
        if (confirmed) {
          this.auth.signOut();
        }
      });
  }

  openSignInDialog() {
    this.dialog.open(SignInDialogComponent);
  }
}
