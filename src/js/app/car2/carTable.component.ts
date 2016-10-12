import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { CarLot } from './service/cars.svc.ts';
import { Car } from './service/cars.svc.ts';

@Pipe({
	name: 'myuppercase'
})
export class MyUpperCasePipe implements PipeTransform{
	transform(value: any){
		return String(value).toUpperCase();
	}
}

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
