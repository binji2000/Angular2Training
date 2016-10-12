import { Component, Input,OnInit  } from '@angular/core';
import { CarService, CarLot, Car } from './service/cars.svc.ts';

import '../../../css/styles.scss';



@Component({
	selector: 'my-app',
	styles: [require ('./car2.component.scss')],
	template: require('./car2.component.html'),
	providers: [CarService]			
})
export class AppComponent implements OnInit {
	constructor (private carSrv: CarService){
		this.now = new Date();
	}

	ngOnInit() { 
		this.carLot = this.carSrv.getCarLot();
 	} 


	carLot: CarLot;

	now: Date;

	favColor: string = "green";

	handleNewCar(newCar: Car) { 
		//console.log("inside car2.component.newCarhandler()");
 		this.carLot.insert(newCar); 
		this.showTable = !this.showTable;
 	} 



  showTable: boolean = true;
	
	startCreateCar() {
		this.showTable = !this.showTable;
	}

	// addCar(car: Car) {
	// 	this.showTable = !this.showTable;
	// 	this.newCar = <Car>{};
	// 	this.carLot.insert(car)
	// }




}


