import { Injectable } from '@angular/core';
import { Car } from './../vo/car';
import { CarLot } from './../vo/carLot';



@Injectable()

export class CarService{

	_carLot: CarLot;

	constructor(){
		this._carLot = new CarLot();
	}

	// getCarList(): Car[] {
	// 	return this._carLot.getCarList();
	// } 

	// insert (car: Car) {
	// 	this._carLot.insert(car) ;
	// }

	getCarLot(){
		return this._carLot;
	}

/*
	sortByYear(a:Car, b:Car) : number {
			return a.year - b.year;
	}


	sortByYear(a:Car, b:Car) : number {
			return a.year - b.year;
	}
	
*/


}
