import { Component, Input, Output, EventEmitter   } from '@angular/core';
import { Car } from './../vo/car';
import { CarLot } from './../vo/carLot';
import { CarService } from './../service/cars.svc';


import {  Directive,forwardRef } from '@angular/core'; 

@Component({
	selector: 'car-builder',
	template: require('./carBuilder.component.html')
})
export class CarBuilderComponent {

	newCar: Car = <Car>{};

	@Output() 
 	newCarEmitter: EventEmitter<Car> = new EventEmitter<Car>(); 
 
 
 	btnAddCar_Click() { 
		//console.log("from car builder.addCar()");
 		this.newCarEmitter.emit(this.newCar); 
 	} 

}


