import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loginUrl = `${environment.api}${environment.restful}/login`;
  //TESTE
  // private loginUrl = `${environment.api}${environment.restful}`;
  //REMOVER

  constructor(private http: HttpClient, private router: Router) { }

  public authorize(url: string) {
    return this.http.get<any>(url).pipe(take(1)).subscribe(
      res => {},
      err => {
        if (err instanceof HttpErrorResponse) {
          if(err.status === 401){
            this.logout();
          }else{
            this.router.navigate(['/erro']);
          }
        }
      }
    );
  }

  public login(credential: Credential) {
    return this.http.post<any>(this.loginUrl, credential).pipe(take(1));
  }

  public logged(){
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
