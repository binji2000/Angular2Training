import { Component } from '@angular/core';
import { Cars } from './service/colors.svc.ts';
import { Car } from './service/colors.svc.ts';

import '../../css/styles.scss';


@Component({
	selector: 'my-app',
	template: `<table>
								<thead>
									<tr>
										<th>Make</th><th>Model</th><th>Year</th><th>Color;</th>
									</tr>
								</thead>
								<tbody>
									<tr *ngFor="let car of sortedByYear">
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
								<button type="button" (click)="sortAgain()">Sort</button>
							</div>

							
							`,
	providers: [Cars]			
})
export class AppComponent {
	constructor (private cars: Cars){

	}

	newCar: Car = <Car>{};

	addCar(car: Car) {
		this.newCar = <Car>{};
		this.cars.insert(car)
	}

	get sortedByYear() : Car[] {
		return this.cars.getAll();
	}


	sortAgain(car: Car) {
		return this.cars.getAll();
	}

}


