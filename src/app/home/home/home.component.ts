import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    //this.authService.authorize(`${environment.api}${environment.restful}${this.router.url}`);
    //TESTE
    // this.authService.authorize(`${environment.api}${environment.restful}`);
    //REMOVER
  }

}
