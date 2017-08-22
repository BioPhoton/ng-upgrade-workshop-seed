import {Directive, forwardRef} from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/first';
import {Observable} from 'rxjs/Observable';

@Directive({
  selector: '[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CityAsyncValidator),
      multi: true
    }
  ]
})
export class CityAsyncValidator implements AsyncValidator {


  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const routValidation$ = new Observable(observer => {
      switch (c.value) {
        case 'Wien':
        case 'Zürich':
        case 'Bern':
          observer.next(null);
          return;
        default:
          observer.next({
            asyncCity: true
          })
      }
    });

    return routValidation$.first();
  }

}
