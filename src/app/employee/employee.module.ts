import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterComponent } from './router/router.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailsComponent, EmployeeFormComponent, RouterComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CommonModule
  ]
})
export class EmployeeModule { }
