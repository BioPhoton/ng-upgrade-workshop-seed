import * as angular from 'angular';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

angular
    .module('flight-app')
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('flightBooking', {
            abstract: true,
            url: '/flightBooking',
            template: '<flight-booking></flight-booking>'
        })
        .state('flightBooking.flightSearch', {
            url: '/flight',
            template: '<migrated-flight-search-component></migrated-flight-search-component>'
        })
        .state('flightBooking.passengerSearch', {
            url: '/passenger',
            template: '<passenger-search></passenger-search>'
        })

        .state('flightBooking.flightEdit', {
          url: '/flight/:id',
          template: '<migrated-flight-edit-component [flight]="$ctrl.flight"></migrated-flight-edit-component>',
          resolve: {
            flight: ($stateParams, flightService) => {
              return flightService.getById($stateParams.id);
            }
          },
          controllerAs: '$ctrl',
          controller: function(flight) { this.flight = flight; }
        })
        .state('flightBooking.passengerEdit', {
          url: '/passenger/:id',
          template: '<migrated-passenger-edit-component [passenger]="$ctrl.passenger"></migrated-passenger-edit-component>',
          resolve: {
            passenger: ($stateParams, passengerService) => {
              return passengerService.getById($stateParams.id);
            }
          },
          controllerAs: '$ctrl',
          controller: function(passenger) { this.passenger = passenger; }
        });
}]);




