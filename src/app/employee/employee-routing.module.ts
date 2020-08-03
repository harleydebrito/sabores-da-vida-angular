import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


const routes: Routes = [
  {
    path: '', component: EmployeeComponent, children: [
      { path: ':id', component: EmployeeDetailsComponent },
      { path: ':id/edit', component: EmployeeFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
