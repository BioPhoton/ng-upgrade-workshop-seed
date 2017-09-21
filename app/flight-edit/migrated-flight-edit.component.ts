import {FlightService} from '../services/flight.service';
import {Flight} from "../shared/flight";
import {Component, Input, OnInit} from '@angular/core';
import {MigratedFlightService} from '../services/migrated-flight.service';

@Component({
    selector: 'migrated-flight-edit-component',
    templateUrl: './migrated-flight-edit.component.html'
})
export class MigratedFlightEditComponent {
    info: string = 'Flight Edit';
    id: string;
    @Input() flight: Flight = <any>{};
    message: string;

    constructor(private flightService: MigratedFlightService) {
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
