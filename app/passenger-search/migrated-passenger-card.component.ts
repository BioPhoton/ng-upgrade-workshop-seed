
import {Passenger} from '../shared/passenger';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'migrated-passenger-card-component',
    templateUrl:'./migrated-passenger-card.component.html'
})
export class MigratedPassengerCardComponent {
        @Input()
        item: Passenger;
        @Input()
        selectedItem: Passenger;
        @Output()
        selectedItemChange: EventEmitter<Passenger> = new EventEmitter<Passenger>()

        select(){
            this.selectedItem = this.item;
            this.selectedItemChange.next(this.item);
        }
}
