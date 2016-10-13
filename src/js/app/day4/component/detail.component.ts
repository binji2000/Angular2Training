import { Component, Input, Output, EventEmitter   } from '@angular/core';
import { Products } from './../service/Products.svc';



@Component({
	selector: 'product-detail',
	template: require('./detail.component.html')
})
export class ProductDetailComponent {
	@Input()
	product: any;

	
/*
	newCar: Car = <Car>{};
	
	@Output() 
 	newCarEmitter: EventEmitter<Car> = new EventEmitter<Car>(); 

 	btnAddCar_Click() { 
		//console.log("from car builder.addCar()");
 		this.newCarEmitter.emit(this.newCar); 
 	} 
 
 */


}

