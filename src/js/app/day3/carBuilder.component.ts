import { Component, Input,OnInit,Output, EventEmitter   } from '@angular/core';
import { Car } from './vo/car';
import { CarLot } from './vo/carLot';
import { CarService } from './service/cars.svc';



@Component({
	selector: 'car-builder',
	template: require('./carBuilder.component.html')
})
export class CarBuilderComponent {

	newCar: Car = <Car>{};

	@Output() 
 	onNewCar: EventEmitter<Car> = new EventEmitter<Car>(); 
 
 
 	addCar() { 
		//console.log("from car builder.addCar()");
 		this.onNewCar.emit(this.newCar); 
 	} 

}


