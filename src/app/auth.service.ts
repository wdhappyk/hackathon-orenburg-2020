import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';
import { UserType } from './user-type';
import { users } from './data/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthSubject = new Subject<boolean>();
  isAuth = false;

  get isAuth$() {
    return this.isAuthSubject.asObservable();
  }

  user: User;

  private guestUser: User = {
    phone: '',
    fullName: 'Гость',
    type: UserType.Guest,
  };

  constructor(
    private router: Router,
    private cookie: CookieService,
    private snackBar: MatSnackBar,
  ) {
    this.user = this.guestUser;
    this.isAuth$.subscribe((isAuth) => {
        this.isAuth = isAuth;
    });
    this.isAuthSubject.next(false);
  }

  signIn(phone: string): Observable<boolean> {
    this.cookie.set('Token', phone);

    this.user = users.find((user) => user.phone === phone) || {
      phone,
      fullName: 'Новый Пользователь',
      type: UserType.Client,
    };

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
    this.user = this.guestUser;
    this.isAuthSubject.next(false);
    this.cookie.deleteAll();
  }

  isClient() {
    return this.user.type === UserType.Client;
  }

  isGuest() {
    return this.user.type === UserType.Guest;
  }

  isEmployeeOfShelter() {
    return this.user.type === UserType.EmployeeOfShelter;
  }

  isEmployeeOfAdministration() {
    return this.user.type === UserType.EmployeeOfAdministration;
  }

  isContractor() {
    return this.user.type === UserType.Contractor;
  }
}
