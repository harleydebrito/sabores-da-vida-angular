import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  data: Date = new Date(2020, 7, 9);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authorize(`${environment.api}${environment.restful}${this.router.url}`);
    //TESTE
    // this.authService.authorize(`${environment.api}${environment.restful}`);
    //REMOVER
  }

}
