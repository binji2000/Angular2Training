import { Directive, forwardRef, Input  } from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
	selector: '[minlen][ngModel]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: forwardRef (() => MinLenValidatorDirective),
		multi: true
	}]
})
export class MinLenValidatorDirective {

	@Input('minlen')
	minLen: number;

	validate(c: FormControl): any {
		if  (String(c.value).length < this.minLen) {
			return {
				minLen: true
			}
		}
		return null;
	}
}
