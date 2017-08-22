import {Component, Input} from '@angular/core';
import {Passenger} from '../shared/passenger';
import {MigratedPassengerService} from '../services/migrated-passenger.service';

@Component({
    selector: 'migrated-passenger-edit-component',
    templateUrl: './migrated-passenger-edit.component.html'
})
export class MigratedPassengerEditComponent {
    info: string = 'Passenger Edit';
    id: string;
    @Input() passenger: Passenger = <any>{};
    message: string;

    constructor(private passengerService: MigratedPassengerService) {
    }

    save() {
        this.passengerService
            .save(this.passenger)
            .then((passenger: Passenger) => {
                this.passenger = passenger;
                this.message = '';
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }
}
