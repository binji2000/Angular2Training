import { Component, Input,OnInit , Inject, OpaqueToken } from '@angular/core';




import { Injectable } from '@angular/core';


@Component({
	selector: 'list-box',
	template: `<div>
							<ng-content select="header"></ng-content>
								<ul>
									<li *ngFor="let item of items">{{item}}</li>
								</ul>
								<ng-content select="footer"></ng-content>
							</div>
						`
})
export class ListBox {
	@Input()
	items: string[];
}


@Component({
	selector: 'my-app',
	template: `<list-box [items]="colors">
								<header><h1>list of Colors</h1></header>
								<footer><small>List of colors from whatever</small></footer>
							</list-box>
	`,
})
export class TempComponent {

	colors: string[] = ['red', 'white', 'green', 'purple'];
}

