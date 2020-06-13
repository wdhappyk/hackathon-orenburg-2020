import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private auth: AuthService,
    private cookie: CookieService,
  ) {
    this.initLoader();
    this.auth.isAuth$.subscribe((isAuth) => {
      if (isAuth) return;
      this.router.navigate(['/']);
    });
  }

  private initLoader(): void {
    this.router.events.subscribe(
      (event) => {
        const navState = this.getCurrentNavigationState(this.router);
        if (navState && navState.ignoreAppLoader) {
          return;
        }

        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
          this.loading = false;
        }
      },
    );
  }

  private openSignInDialog() {
    this.dialog.open(SignInDialogComponent);
  }

  private getCurrentNavigationState(router: any) {
    const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras) {
      return currentNavigation.extras.state;
    }

    return {};
  }

  ngOnInit(): void {
    if (this.cookie.get('Token')) {
      this.auth.signIn();
      return;
    }
    this.router.navigate(['/animal-categories']).then(() => {
      this.openSignInDialog();
    });
  }
}
