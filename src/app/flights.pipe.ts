import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './Model/Flight';

@Pipe({
  name: 'flightsFilter'
})
export class FlightsPipe implements PipeTransform {

  transform(flights: Flight[],text: string): Flight[] {
    let results:Flight[] = []
    if(text==='') {
      return flights
    }
    else{
      
      flights.forEach(flight=>{
        if(flight.fid?.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
          results.push(flight)
        }
      })
    }
    return results;
  }

}
