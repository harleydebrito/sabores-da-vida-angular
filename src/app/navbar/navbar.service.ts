import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { HttpRequestsService } from '../shared/http-requests.service';
import { Navbar } from './navbar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService extends HttpRequestsService<Navbar>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}routes`);
  }
}
