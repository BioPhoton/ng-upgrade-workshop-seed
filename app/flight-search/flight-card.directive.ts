import {Flight} from '../shared/flight';

import * as angular from 'angular';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;

    select() {
        this.selectedItem = this.item;
    }
}

export const FlightCardComponent: angular.IComponentOptions = {
    controller: FlightCardController,
    templateUrl: './flight-card.directive.html',
    transclude: true,
    bindings: {
        item: '=',
        selectedItem: '='
    }
}