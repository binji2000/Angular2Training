import { Component, Input } from '@angular/core';
import { Car } from './../vo/car';
import { CarLot } from './../vo/carLot';


@Component({
	selector: 'car-table',
	template: require('./carTable.component.html')
})

export class CarTableComponent {

	/* initialized through the html fragment */
	@Input()
	carLot: CarLot;


	get items(): Car[] {
		return this.carLot.getCarList();
	}
}	
