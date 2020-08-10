import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date = new Date();

  constructor(private http: HttpClient) {
    // this.date.setHours(8);
    // this.date.setMinutes(0);
    // this.date.setSeconds(0);
    this.http.get("http://192.168.0.105:3000/employee/0?_embed=scheduleEmployee").subscribe(
      (response: any) => {
        console.log(response);
        let url = "http://192.168.0.105:3000/schedule/?";
        response.scheduleEmployee.forEach((element: { scheduleId: number; }) => {
          url = url.concat("id=" + element.scheduleId + "&");
        });
        this.http.get(url).subscribe(
          (response) => console.log(response)
        );
      },
      (response) => console.log(response.message)
    );
  }

  ngOnInit(): void {
    console.log(this.date);
  }

}
