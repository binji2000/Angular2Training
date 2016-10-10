import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app.component';

@Component({
	selector: 'my-app',
	template: `<h1>{{header}}</h1>`
})
export class AppComponent {
	header: string = 'My Colorful App';
}

