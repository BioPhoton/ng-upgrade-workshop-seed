import {FlightService} from '../services/flight.service';
import {BookingEventService} from '../services/booking-event.service';
import {Flight} from '../shared/flight';

class FlightSearchController {

  public from = 'Hamburg';
  public to = 'Graz';
  public selectedFlight:Flight;
  private flightService: FlightService;
  private bookingEventService: BookingEventService;

  constructor(flightService, bookingEventService) {
    this.flightService = flightService;
    this.bookingEventService = bookingEventService;
  }

  getFlights = function () {
    return this.flightService.flights;
  }

  search = function () {

    return this
      .flightService
      .find(this.from, this.to)
      .catch((resp) => {
        console.debug(resp);
      });
  }

  select(f) {
    this.selectedFlight = f;
    this.bookingEventService.publish(f);
  }
}

export const FlightSearchComponent: angular.IComponentOptions = {
  controller: FlightSearchController,
  template: require('./flight-search.html')
}
