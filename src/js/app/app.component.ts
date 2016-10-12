import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-header',
	template: `<header><h1>{{header}}</h1></header>`
})

export class MyHeaderComponent {
	@Input('header2')
	header: string;
}	

@Component({
	selector: 'my-app',
	template: `<my-header [header2]="header"></my-header>`
})

export class AppComponent {
	header: string = "My Header";


}


