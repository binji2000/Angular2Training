import { Component, Input,OnInit,Output, EventEmitter   } from '@angular/core';
import { CarService, CarLot, Car } from './service/cars.svc.ts';



@Component({
	selector: 'car-builder',
	template: require('./carBuilder.component.html')
})
export class CarBuilderComponent {

	newCar: Car = <Car>{};

	@Output() 
 	newCarEventEmitter: EventEmitter<Car> = new EventEmitter<Car>(); 
 
 
 	addCar() { 
		 console.log("from car builder.addCar()");
 		this.newCarEventEmitter.emit(this.newCar); 
 	} 

}


