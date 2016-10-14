import { Component, Input, Directive, ElementRef, Renderer, HostListener } from '@angular/core';




import { Injectable } from '@angular/core';


@Component({
	selector: 'list-box',
	template: `
							<div>
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



@Directive({
	selector: '[boldMe]'
})
export class BoldMeDirective {
	constructor (
		private element: ElementRef,
		private renderer: Renderer
	){
		this.renderer.setElementStyle(
				this.element.nativeElement, 'font-weight', 'bold'
		);

	}

	@HostListener('click')
	click(){
		console.log("I was clicked");
	}

}


/* note: attribute directive need [] if there is data pass into it. */
@Component({
	selector: 'my-app',
	template: `<list-box [items]="colors">
								<header><span boldMe>list of Colors</span></header>
								<footer><small>List of colors from whatever</small></footer>
							</list-box>
	`,
})
export class TempComponent {

	colors: string[] = ['red', 'white', 'green', 'purple'];
}

