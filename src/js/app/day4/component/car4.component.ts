import { Component, Input,OnInit  } from '@angular/core';

import { Car } from './../vo/car';
import { CarLot } from './../vo/carLot';
import { CarService } from './../service/cars.svc';




@Component({
	selector: 'my-app',
	styles: [require ('./car4.component.scss')],
	template: require('./car4.component.html'),
	providers: [CarService]			
})
export class AppComponent implements OnInit {
	constructor (private carSrv: CarService){
		this.now = new Date();
	}

	/* life cycle functions provides more control */
	ngOnInit() { 
		this.carLot = this.carSrv.getCarLot();
 	} 


	carLot: CarLot;

	now: Date;

	handleNewCar(newCar: Car) { 
		//console.log("inside car2.component.newCarhandler()");
 		this.carLot.insert(newCar); 
		this.isTableVisible = !this.isTableVisible;
 	} 



  isTableVisible: boolean = true;
	
	btnCreateClick() {
		this.isTableVisible = !this.isTableVisible;
	}


	favColor: string = "green";



}


