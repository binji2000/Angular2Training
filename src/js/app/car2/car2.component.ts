import { Component, Input,OnInit  } from '@angular/core';
import { CarService, CarLot, Car } from './service/cars.svc.ts';

import '../../../css/styles.scss';

@Component({
	selector: 'my-header',
	template: `<header><h1>{{header}}</h1></header>`
})

export class MyHeaderComponent {
	@Input()
	header: string;
}	


@Component({
	selector: 'my-app',
	styles: [require ('./car2.component.scss')],
	template: require('./car2.component.html'),
	providers: [CarService]			
})
export class AppComponent implements OnInit {
	constructor (private carSrv: CarService){
		this.now = (new Date()).toString();
	}

	ngOnInit() { 
		this.carLot = this.carSrv.getCarLot();
 	} 


	carLot: CarLot;

	now: string = "";

	favColor: string = "green";

	header: string = "My Car Collection";



	newCar: Car = <Car>{};

  showTable: boolean = true;
	
	startCreateCar() {
		this.showTable = !this.showTable;
		
	}

	addCar(car: Car) {
		this.showTable = !this.showTable;
		this.newCar = <Car>{};
		this.carLot.insert(car)
	}


	get sortedByYear() : Car[] {
		return this.carLot.getCarList();
	}



}


