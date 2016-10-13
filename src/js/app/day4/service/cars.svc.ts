import { Injectable } from '@angular/core';
import { Car } from './../vo/car';
import { CarLot } from './../vo/carLot';



@Injectable()
export class CarService{

	_carLot: CarLot;

	constructor(){
		this._carLot = new CarLot();
	}

	getCarLot(){
		return this._carLot;
	}



}
