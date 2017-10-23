import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  private apiUrl =  'http://api.openweathermap.org/data/2.5/group?id=4005539,4005270,3530597,3995465,3981609&' +
    'units=metric&APPID=3a9deedf5989f52f6747929b2c0a763a';
  data: any = {};
  selectedCity: number;
  selectedCityName: string;
  isSelected = false;

  constructor(private http: Http) {
    this.getCities();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getCities() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }

  onSelect(city: number, name: string) {
    this.selectedCity = city;
    this.selectedCityName = name;
    this.isSelected = true;
  }

  showForecast() {
  }

  ngOnInit() {
  }
}
