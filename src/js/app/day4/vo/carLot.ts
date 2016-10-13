import { Car } from './car';

export class CarLot {

	private _cars: Car[] = 
							 [ 
									{make: 'Toyota', model: 'Camry', year: 2016, color: 'Red'},
									{make: 'Honda', model: 'Accord', year: 2012, color: 'Blue'},
									{make: 'Nissan', model: 'Sentra', year: 2010, color: 'White'}
								];

  sortedCars: Car[] = [];
  lastCars: Car[] = [];

	isDirty:boolean = true;


	getCarList(): Car[] {
		if (this.isDirty){
//		if (this._cars != this.lastCars){
			console.log("sorting by year");
		
			this.sortedCars = this._cars.concat().sort(
				function(a:Car, b:Car){
					return a.year - b.year
	//				return (a.color<b.color?-1:(a.color>b.color?1:0))
				});

			this.isDirty = false;
			this.lastCars = this._cars;

		} 
		return this.sortedCars;
	} 

	insert (car: Car) {
		console.log("inserting a car");
		this._cars = this._cars.concat(car);
		this.isDirty = true;
	}


}

