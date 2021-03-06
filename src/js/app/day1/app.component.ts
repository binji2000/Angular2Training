import { Component } from '@angular/core';
import { Cars } from './service/cars.svc';
import { Car } from './service/cars.svc';


@Component({
	selector: 'my-app',
	styles: [require ('./app.component.scss')],
	template: require('./app.component.html'),
	providers: [Cars]			
})
export class AppComponent {
	constructor (private cars: Cars){
		this.now = (new Date()).toString();
	}

	now: string = "";

	favColor: string = "green";



	newCar: Car = <Car>{};

  showTable: boolean = true;
	
	startCreateCar() {
		this.showTable = !this.showTable;
		
	}
	addCar(car: Car) {
		this.showTable = !this.showTable;
		this.newCar = <Car>{};
		this.cars.insert(car)
	}


	get sortedByYear() : Car[] {
		return this.cars.getAll();
	}


	sortAgain(car: Car) {
		return this.cars.getAll();
	}

}


