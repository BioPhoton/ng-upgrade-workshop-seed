import {Flight} from '../shared/flight';

import * as angular from 'angular';

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