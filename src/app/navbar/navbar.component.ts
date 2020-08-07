import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar.model';
import { NavbarService } from './navbar.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routes: Navbar[] = [];

  constructor(private service: NavbarService) { }

  public ngOnInit(): void {
    this.service.get().pipe(
      map((response) => this.routes = response)
    ).subscribe();
  }

  public onOpenChange(event: any) {

  }
}
