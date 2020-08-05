import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeDetailsComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ]
})
export class EmployeeModule { }
