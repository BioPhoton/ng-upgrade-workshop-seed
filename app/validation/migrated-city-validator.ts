import {Directive} from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator
} from '@angular/forms';

@Directive({
    selector: "[city]",
    providers: [{ provide: NG_VALIDATORS,
        useExisting: CityValidator, multi: true}]

})
export class CityValidator implements Validator{
    validate(c: AbstractControl): ValidationErrors | any {
        switch(c.value) {
        case 'Graz':
        case 'Hamburg':
        case 'Frankfurt':
            return null;
        }

        return { city: true };

    }
}