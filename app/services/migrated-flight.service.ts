import {Flight} from '../shared/flight';
import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise'
import {baseURL} from '../base-url.token';

@Injectable()
export class MigratedFlightService {

    constructor(
        private http: HttpClient,
        @Inject(baseURL) private baseURL: string) {
    }

    flights: Flight[] = [];

    save(flight: Flight) {
        let url = this.baseURL + "/api/flight";

        return this
            .http
            .post<Flight>(url, flight)
            .toPromise()
            .then(resp => resp);
    }

    getById(id) {
        let url = this.baseURL + "/api/flight";

        let reqObj = {
            params: new HttpParams().set('id', id)
        };

        return this
            .http
            .get<Flight>(url, reqObj)
            .toPromise()
            .then(resp => resp);

    }

    find(from: string, to: string): Promise<Flight[]> {

        let url = this.baseURL + "/api/flight";

        let reqObj = {
            params: new HttpParams().set('from', from).set('to', to),
        };

        return this
                .http
                .get<Flight[]>(url, reqObj)
                .toPromise()
                .then((flights: Flight[]) => {
                    this.flights = flights;
                    return flights;
                 });

    }

}
