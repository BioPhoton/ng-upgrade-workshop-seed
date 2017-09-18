import {Passenger} from '../shared/passenger';

export class PassengerService {

    constructor(
        private $http: ng.IHttpService) {
    }

    find(name): angular.IPromise<Passenger[]> {
        var url = 'http://www.angular.at/api/passenger';

        var urlParams = { name: name };

        return this
                .$http
                .get(url, { params: urlParams })
                .then(resp => resp.data);
    }
}