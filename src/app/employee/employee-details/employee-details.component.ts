import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      params => {
        this.employee = params['id'];
      }
    );
  }

}
