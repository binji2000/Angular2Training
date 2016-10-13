import { Component, Input,OnInit  } from '@angular/core';

import { Car } from './vo/car';
import { CarLot } from './vo/carLot';
import { CarService } from './service/cars.svc';

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




}


