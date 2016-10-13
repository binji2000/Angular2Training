import { Directive, forwardRef, Input  } from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';


@Directive({
	selector: '[minLen][ngModel]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: forwardRef(() => MinLenDirective),
		multi: true
	}]
})
export class MinLenDirective {

	private _minLen: number;

	@Input()
	set minLen(value: any) {
		console.log("value = " + value);
		const intValue = parseInt(value, 10);
		this._minLen = intValue || 0;
	}

	validate(c: FormControl) {

		console.log('this._minLen = ' + this._minLen + ', String(c.value).length = ' + String(c.value).length);

		if (this._minLen > 0 && (c.value == null || String(c.value).length < this._minLen)) {
			console.log('minLen invalid');
			return { minlen: false };
		}
		console.log('minLen valid');
		return null;
	}

	// @Input()
	// minLen : number;

	// validate(c: FormControl) {

	// 	console.log('this._minLen = ' + this.minLen + ', String(c.value).length = ' + String(c.value).length);

	// 	if (this.minLen > 0 && (c.value == null || String(c.value).length < this.minLen)) {
	// 		console.log('minLen invalid, this._minLen = ' + this.minLen + ', String(c.value).length = ' + String(c.value).length);
	// 		return { minlen: false };
	// 	}
	// 	console.log('minLen valid');
	// 	return { minlen: true };
	// }
}