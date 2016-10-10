import { Component } from '@angular/core';

import '../../css/styles.scss';

interface Car {
  make:string;
  model:string;
  year:number;
  color:string;
}


@Component({
	selector: 'my-app',
	template: `<table>
								<thead>
									<tr>
										<th>Make</th><th>Model</th><th>Year</th><th>Color;</th>
									</tr>
								</thead>
								<tbody>
									<tr *ngFor="let car of sortedByColor">
										<td>{{car.make}}</td>
										<td>{{car.model}}</td>
										<td>{{car.year}}</td>
										<td>{{car.color}}</td>
									</tr>
								</tbody>
							</table>
							
							<br/>

							<div>
							  <label>New Car Information:</label>
								<br/>
								<label for="new-make">Make</label>
								<input type="text" id="new-make" name="new-make" [(ngModel)]="newCar.make" />
								<label for="new-model">Model</label>
								<input type="text" id="new-model" name="new-model" [(ngModel)]="newCar.model" />
								<label for="new-year">Year</label>
								<input type="text" id="new-year" name="new-year" [(ngModel)]="newCar.year" />
								<label for="new-color">Color</label>
								<input type="text" id="new-color" name="new-color" [(ngModel)]="newCar.color" />
								<br/>
								<button type="button" (click)="addCar(newCar)">Add Car</button>
							</div>

							
							`
})
export class AppComponent {

	newCar: Car = {make:'', model: '', year: 0, color:''};

	cars: Car[] = [ 
			{make: 'Toyota', model: 'Camry', year: 2016, color: 'Red'},
			{make: 'Honda', model: 'Accord', year: 2014, color: 'Blue'},
			{make: 'Nissan', model: 'Sentra', year: 2010, color: 'White'}
		];

	lastCars: Car[] = [];
  sortedCars: Car[] = [];

	isDirty:boolean = true;

	addCar(car: Car) {

		this.cars.push(car);
		this.isDirty = true;
	}

	get sortedByYear() : Car[] {
		console.log("sorting by year");
		this.lastCars = this.cars;

		return  this.cars.concat().sort(
			function(a:Car, b:Car){
				return a.year - b.year
			});
	}

	get sortedByColor() : Car[] {
		if (this.isDirty){
			console.log("sorting by color");
		
			this.sortedCars = this.cars.concat().sort(
				function(a:Car, b:Car){
					return (a.color<b.color?-1:(a.color>b.color?1:0))
				});

				this.lastCars = this.cars.concat();
				this.isDirty = false;

		} 
		return this.sortedCars;
		
	}

}


/*
@Component({
	selector: 'my-app',
	template: `<h1>{{header}}</h1>`
})
export class AppComponent1 {
	header: string = 'My colorful App';
}



@Component({
	selector: 'my-app',
	template: `<table>
								<thead>
									<tr>
										<th>Make</th><th>Model</th><th>Year</th><th>color</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td *ngFor="let car of Car">{{car}}</td>
									</tr>
								</tbody>
							</table>`
})
export class AppComponent {
	Car: string[] = [ 'Toyota', 'Camry', '2016', 'Red'];

}

*/

