import { Component, Input,OnInit  } from '@angular/core';




import { Injectable } from '@angular/core';


@Injectable()
export class MyService{
	constructor(){
		console.log("inside constructor");
	}

	doSomething(){
		console.log("did it")
	}
}


@Injectable()
export class AltMyService{
	constructor(){
		console.log("inside constructor");
	}

	doSomething(){
		console.log("dit it alt")
	}
}

const svc = {
	doSomething: () => console.log("did it too!")
}

const factory = () => new AltMyService();

@Component({
	selector: 'my-child',
	template: ``,
	providers: [{provide: MyService, useClass: AltMyService}]
})
export class ChildComponent {
	constructor (private myService: MyService) {
	}
}

@Component({
	selector: '<my-app>',
	template: `<my-child></my-child>`,
	providers: [{provide: MyService, useClass: MyService}]
})
export class AppComponent {
	constructor (private myService: MyService) {
	}
}

con svc = {
	doSomething: () => console.log("did it too!");
}