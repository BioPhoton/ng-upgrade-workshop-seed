import {Flight} from '../shared/flight';

import * as angular from 'angular';
import {
    Directive, ElementRef, EventEmitter, Injector, Input,
    Output
} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;
    selectedItemChange: Function;

    $onChanges() {
        console.log('FlightCardController $onChanges');
    }

    $onInit() {
        console.log('FlightCardController $onInit');
    }

    select() {
        this.selectedItem = this.item;
        this.selectedItemChange(this.selectedItem);
    }
}

export const FlightCardComponent: angular.IComponentOptions = {
    controller: FlightCardController,
    templateUrl: './flight-card.component.html',
    transclude: true,
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
}

@Directive({
    selector: 'flight-card'
})
export class UpgradedFlightCardComponent extends UpgradeComponent {

    @Input() item;
    @Input() selectedItem;
    @Output() selectedItemChange = new EventEmitter<Flight>();

    constructor(elementRef: ElementRef, injector: Injector) {
        super('flightCard', elementRef, injector);
    }
}
