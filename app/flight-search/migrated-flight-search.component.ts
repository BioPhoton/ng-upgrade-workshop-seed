import {Component} from '@angular/core';
import {MigratedFlightService} from '../services/migrated-flight.service';
import {Flight} from '../shared/flight';

@Component({
  selector: 'migrated-flight-search-component',
  templateUrl: './migrated-flight-search.component.html'
})
export class MigratedFlightSearchComponent {

  public from = 'Hamburg';
  public to = 'Graz';
  public selectedFlight: Flight;

  constructor(private flightService: MigratedFlightService) {
  }

  getFlights() {
    return this.flightService.flights;
  }

  search() {

    return this
      .flightService
      .find(this.from, this.to)
      .catch((resp) => {
        console.debug(resp);
      });
  }

  select(f) {
    this.selectedFlight = f;
  }
}
