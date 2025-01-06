import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      // Check if the user is authenticated via Firebase
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(true); // User is authenticated, allow access
        } else {
          this.router.navigate(['/login']); // Redirect to login
          observer.next(false); // Block access
        }
        observer.complete();
      });
    });
  }
}
