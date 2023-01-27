import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceComponent } from '../data-service/data-service.component';
import { Flight } from '../Model/Flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  flights:Flight[] = []
  allFlights:Flight[] = []
  searchText: string='';
  isLoading:boolean = true;
  departures: Set<string> = new Set();
  arrivals: Set<string> = new Set();
  selectedDeparture:string = 'default';
  selectedArrivals:string = 'default';
  subscription?:Subscription;
  Array:any=Array
  constructor(private data:DataServiceComponent) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription=this.data.getFlightsList().subscribe({
      next: ((res : Flight[])=>{
                this.flights = res
                this.allFlights = res
                this.populateFilters();
                this.isLoading = false;
      }),
      error: (err=>{console.log(err)})
    });
  }

  populateFilters(){
    this.flights.forEach(flight=>{
      this.departures.add(flight.departure!);
      this.arrivals.add(flight.arrival!);
    })
  }

  filter(){
    this.isLoading=true;
    let result:Flight[] = []
    this.allFlights.forEach(flight=>{
      let arrivaleOk, departureOk :boolean=false;
      if(this.selectedArrivals==='default'){
        arrivaleOk = true;
      }else{
        if(this.selectedArrivals===flight.arrival){
          arrivaleOk= true;
        }
      }
      if(this.selectedDeparture==='default'){
        departureOk = true;
      }else{
        if(this.selectedDeparture===flight.departure){
          departureOk= true;
        }
      }
      if(arrivaleOk && departureOk){
        result.push(flight);
      }
    })
    this.flights= result;
    console.log(this.selectedArrivals +' '+ this.selectedDeparture)
    this.isLoading=false;
  }

}
