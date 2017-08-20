import {Passenger} from '../shared/passenger';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class PassengerService {

    constructor(
      private http: HttpClient) {
    }

    find(name): Promise<Passenger[]> {
        const url = 'http://www.angular.at/api/passenger';

        const urlParams = new HttpParams().set('name', name);

        return this
          .http
          .get<Passenger[]>(url, { params: urlParams })
          .toPromise()
          .then(resp => resp);
    }
}
