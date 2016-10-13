import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-header',
	template: require('./header.component.html'),
})

export class MyHeaderComponent {
	@Input()
	header: string;
}	
