import { Component, Input,OnInit  } from '@angular/core';

import { Car } from './../vo/car';
import { CarLot } from './../vo/carLot';
import { CarService } from './../service/cars.svc';



@Component({
	selector: 'my-app',
	styles: [require ('./car5.component.scss')],
	template: require('./car5.component.html'),
	providers: [CarService]			
})
export default class AppComponent implements OnInit {
	constructor (private carSrv: CarService){
		this.now = new Date();
	}

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
		console.log("abd");
		this.isTableVisible = !this.isTableVisible; 
	}


	favColor: string = "green";



}


