import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable, Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  canLoad() {
    console.log(this.router);
    return this.http.get<any>(`${environment.api}${environment.restful}/home`).pipe(
      map(
        res => {
          console.log(`canLoad true`);
          this.authService.authorized = true;
          return true;
        }
      ),
      catchError(
        err => of(err).pipe(
          map(() => {
            this.authService.authorized = false;
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.authService.logout();
                return false;
              } else {
                this.router.navigate(['/erro']);
                return false;
              }
            }
          })
        )
      )
    );
  }

  canActivate(): boolean {
    if (this.authService.logged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }



}
