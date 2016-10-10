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
										<th>Make</th><th>Model</th><th>Year</th><th>Color</th>
									</tr>
								</thead>
								<tbody>
									<tr *ngFor="let car of cars">
										<td>{{car.make}}</td>
										<td>{{car.model}}</td>
										<td>{{car.year}}</td>
										<td>{{car.color}}</td>
									</tr>
								</tbody>
							</table>`
})
export class AppComponent {
	cars: Car[] = [ 
			{make: 'Toyota', model: 'Camry', year: 2016, color: 'Red'},
			{make: 'Honda', model: 'Accord', year: 2014, color: 'Blue'}
		];

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

