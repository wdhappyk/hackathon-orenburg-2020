import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthSubject = new Subject<boolean>();

  get isAuth$() {
    return this.isAuthSubject.asObservable();
  }

  constructor(
    private router: Router,
    private cookie: CookieService,
    private snackBar: MatSnackBar,
  ) {
    this.isAuthSubject.next(false);
  }

  signIn(): Observable<boolean> {
    this.cookie.set('Token', '12345-6789-01235');
    this.isAuthSubject.next(true);
    return new Observable<boolean>((observer) => {
      observer.complete();
      return {
        unsubscribe() {
        },
      };
    });
  }

  verifyCode(code: string): Observable<boolean> {
    return of(code === '1234');
  }

  signOut() {
    this.isAuthSubject.next(false);
    this.cookie.deleteAll();
  }
}
