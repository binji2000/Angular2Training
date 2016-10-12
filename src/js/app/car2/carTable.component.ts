import { Component, Input } from '@angular/core';
import { CarLot } from './service/cars.svc.ts';
import { Car } from './service/cars.svc.ts';


@Component({
	selector: 'car-table',
	template: require('./carTable.component.html'),
})

export class CarTableComponent {
	@Input()
	carLot: CarLot;

	//items: Car[];

	get items(): Car[] {
		return this.carLot.getCarList();
	}
}	
