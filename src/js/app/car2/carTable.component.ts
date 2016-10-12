import { Component, Input } from '@angular/core';
import { Cars } from './../service/cars.svc.ts';
import { Car } from './../service/cars.svc.ts';


@Component({
	selector: 'car-table',
	template: require('./carTable.component.html'),
})

export class CarTableComponent {
	@Input()
	items: Car[];
}	
