import { Component } from '@angular/core';

import '../../css/styles.scss';

@Component({
	selector: 'my-app',
	template: `<table>
								<thead>
									<tr>
										<th>Make</th><th>Model</th><th>Year</th><th>Color</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{{Make}}</td><td>{{Model}}</td><td>{{Year}}</td><td>{{Color}}</td>
									</tr>
								</tbody>
							</table>`
})
export class AppComponent {
	Make: string = 'Toyota';
	Model: string = 'Camry';
	Year: string = '2016';
	Color: string = 'Red';
}


/*
@Component({
	selector: 'my-app',
	template: `<h1>{{header}}</h1>`
})
export class AppComponent1 {
	header: string = 'My Colorful App';
}
*/

