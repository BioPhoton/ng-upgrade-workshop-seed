import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  downgradeComponent,
  downgradeInjectable,
  UpgradeModule
} from '@angular/upgrade/static';

import * as angular from 'angular';
import {OAuthService} from 'angular2-oauth2/oauth-service';
import {AppComponent} from './app.component';
import {FlightBookingComponent} from './flight-booking/flight-booking.component';
import {MigratedFlightEditComponent} from './flight-edit/migrated-flight-edit.component';
import {
  FlightCardComponent,
  UpgradedFlightCardComponent
} from './flight-search/flight-card.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {MigratedFlightSearchComponent} from './flight-search/migrated-flight-search.component';
import {createCityFilter} from './fliters/city.filter';
import {HomeComponent} from './home/home.component';
import {PassengerCardComponent} from './passenger-search/passenger-card.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import {BookingEventService} from './services/booking-event.service';
import {FlightService, flightServiceProvider} from './services/flight.service';
import {MigratedPassengerService} from './services/migrated-passenger.service';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {MigratedTabsModule} from './tabs/migrated-tabs.module';
import tabs from './tabs/tabs.module';
import {createCityAsyncValidatorDDO} from './validation/city-async-validator';
import {createCityValidatorDDO} from './validation/city-validator';
import {MigratedPassengerCardComponent} from './passenger-search/migrated-passenger-card.component';
import {PassengerStatus} from './pipes/passenger-status.pipe';

const app = angular.module('flight-app', ['ngMessages', 'ui.router', tabs]);

app.service('flightService', FlightService);
app.service('bookingEventService', BookingEventService );
app.service('oauthService', OAuthService);
app.factory('passengerService', downgradeInjectable(MigratedPassengerService))
app.constant('baseURL', 'http://www.angular.at');
app.filter('city', createCityFilter);
app.directive('city', createCityValidatorDDO);
app.directive('cityAsync', createCityAsyncValidatorDDO);
app.component('home', HomeComponent);
app.component('passengerSearch', PassengerSearchComponent);
app.component('app', AppComponent);
app.component('flightBooking', FlightBookingComponent);
app.component('shoppingCard', ShoppingCardComponent);
app.component('flightSearch', FlightSearchComponent)
app.component('flightCard', FlightCardComponent);

app
  .directive(
    'migratedFlightSearchComponent',
    downgradeComponent({ component: MigratedFlightSearchComponent }) as angular.IDirectiveFactory
  );

app
  .directive(
    'migratedFlightEditComponent',
    downgradeComponent({ component: MigratedFlightEditComponent }) as angular.IDirectiveFactory
  );

app
  .directive(
    'migratedPassengerCardComponent',
    downgradeComponent({ component: MigratedPassengerCardComponent }) as angular.IDirectiveFactory
  );

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    UpgradeModule,
    MigratedTabsModule
  ],
  declarations: [
    MigratedFlightSearchComponent,
    UpgradedFlightCardComponent,
    MigratedFlightEditComponent,
    MigratedPassengerCardComponent,
    PassengerStatus
  ],
  entryComponents: [
    MigratedFlightSearchComponent,
    MigratedFlightEditComponent,
    MigratedPassengerCardComponent
  ],
  providers: [
    flightServiceProvider,
    MigratedPassengerService,
    PassengerStatus
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['flight-app'], { strictDi: false });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);

/**/
