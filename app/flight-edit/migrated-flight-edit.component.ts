import {FlightService} from '../services/flight.service';
import {Flight} from "../shared/flight";
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'migrated-flight-edit-component',
    templateUrl: './migrated-flight-edit.component.html'
})
export class MigratedFlightEditComponent implements OnInit {
    info: string = 'Flight Edit';
    @Input() id: string;
    flight: Flight = <any>{};
    message: string;

    constructor(private flightService: FlightService) {
    }

    ngOnInit(): void {
        this.flightService
          .getById(this.id)
          .then((flight: Flight) => {
              this.flight = flight;
              this.message = '';
          })
          .catch(resp => {
              console.error(resp);
              this.message = resp.data;
          })
    }

    save() {

        this.flightService
            .save(this.flight)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = '';
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }
}
