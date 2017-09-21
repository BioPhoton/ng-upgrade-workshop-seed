import {Passenger} from '../shared/passenger';
import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise'
import {baseURL} from '../base-url.token';

@Injectable()
export class MigratedPassengerService {

    resourcePath: string = "/api/passenger";

    constructor(
      private http: HttpClient, @Inject(baseURL) private baseURL: string) {
    }

    save(flight: Passenger) {
        const url = this.baseURL +this.resourcePath;

        return this
          .http
          .post<Passenger>(url, flight)
          .toPromise()
          .then(resp => resp);
    }


    find(name): Promise<Passenger[]> {
        const url = this.baseURL +this.resourcePath;

        const urlParams = new HttpParams().set('name', name);

        return this
          .http
          .get<Passenger[]>(url, { params: urlParams })
          .toPromise()
          .then(resp => resp);
    }

    getById(id): Promise<Passenger[]> {
        const url = this.baseURL +this.resourcePath;

        const urlParams = new HttpParams().set('id', id);

        return this
          .http
          .get<Passenger[]>(url, { params: urlParams })
          .toPromise()
          .then(resp => resp);
    }
}
