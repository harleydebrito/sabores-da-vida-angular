import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loginUrl = `${environment.api}${environment.restful}login`;
  private authenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  public login(credential: Credential){
    console.log(credential);
    return this.http.post<any>(this.loginUrl, credential).pipe(take(1));
  }

  public logged(): boolean{
    return !!localStorage.getItem('token');
  }

  public getToken(): string{
    return localStorage.getItem('token');
  }

  public logout(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
