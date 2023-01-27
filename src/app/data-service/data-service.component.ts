import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Flight } from '../Model/Flight';
@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {
  flightsURL = environment.baseUrl + 'Flights'
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getFlightsList():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.flightsURL);    
  }

}
