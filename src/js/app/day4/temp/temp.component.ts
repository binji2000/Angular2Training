import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Products {
	constructor(private http: Http){

	}
}

@Component({
	selector: 'my-app',
	template: ``
})
export class TempComponent {
	constructor () {
	}
}

