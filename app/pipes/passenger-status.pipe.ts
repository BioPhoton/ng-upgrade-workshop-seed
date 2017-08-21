import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'passengerStatus'
})
export class PassengerStatus implements PipeTransform{
  stausMap = {
    A : {
      short: 'SEN',
      long: 'Senator'
    },
    B : {
      short: 'FTL',
      long: 'Frequent Traveler'
    },
    C : {
      short: 'P',
      long: 'Passenger'
    }

  }
  transform(value: any, isLong: boolean): any {

    if(value in this.stausMap) {
      return isLong ? this.stausMap[value].long : this.stausMap[value].short;
    }

    return value;
  }
}