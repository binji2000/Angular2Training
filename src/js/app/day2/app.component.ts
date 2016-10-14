import { Component, Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';


const myRequiredValidator = (c: FormControl) => {
	if (c.value == null || String(c.value).length === 0){
		//invalid

		return {
			myRequired: {
				valid: false
			}
		};

	}

	return null;
}
@Directive({
	selector: '[myRequired][ngModel]',
	providers: [{
			provide: NG_VALIDATORS, useValue: myRequiredValidator, multi: true
	}]
})

export class MyRequiredDirective { }

@Component({
	selector: 'my-app',
	styles: [require ('./app.component.scss')],
	template: require('./app.component.html')
})

export class AppComponent {
	firstName: string = "";
	lastName: string = "";
	age: number;

	isEmployed:  boolean = false;
	division: string = '';

	states: string[] = ["MA", "IL", "NH", "TX", "NY"];

  showData(){
		console.log(this);
	}

	consoleShow(o: FormControl){
		console.log(o);
		return o;
	}
}


