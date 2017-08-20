import {Passenger} from '../shared/passenger';
import {Injectable} from '@angular/core';

@Injectable()
export class PassengerService {

    constructor(
      private $http: ng.IHttpService) {
    }

    find(name): Promise<Passenger[]> {
        var url = 'http://www.angular.at/api/passenger';

        var urlParams = { name: name };

        return this
          .$http
          .get(url, { params: urlParams })
          .then(resp => resp.data);
    }
}