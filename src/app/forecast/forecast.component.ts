import { Component, OnInit, Input } from '@angular/core';
import { CityComponent } from '../city/city.component';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  @Input() idCity: number;
  @Input() nameCity: number;
  apiUrl;
  data: any = {};

  constructor(private http: Http) {

  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getForecast() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }

  showForecast() {
    this.apiUrl =  'http://api.openweathermap.org/data/2.5/forecast?id=' + this.idCity + '&units=metric' +
      '&APPID=3a9deedf5989f52f6747929b2c0a763a';
    this.getForecast();
    this.getData();
  }

  ngOnInit() {
  }

}
