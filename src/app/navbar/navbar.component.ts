import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routes: Navbar[] = [
    { id: 0, title: "Dashboard", link: "/home" },
    { id: 1, title: "Funcionário", link: "/employee" }
  ];

  constructor() {

  }

  public ngOnInit(): void { }
}
