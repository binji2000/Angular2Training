import { Component, Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

/* define *myIf to simulate [ngIf] */
// <template [ngIf]="showMe"> <span>You can seee me!</span></template>`,
// <span *myIf="showMe">You can see me!</span>`,

@Directive({
	selector: '[myIf]'
})
export class MyIfDirective {
	

	
	constructor (
		private template: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	){
		
	}


	@Input()
	set myIf(condition: boolean){
		if (condition) {
			this.viewContainer.createEmbeddedView(this.template);
		}	else {
			this.viewContainer.clear();
		}
	}

}


/* note: attribute directive need [] if there is data pass into it. */
@Component({
	selector: 'my-app',
	template: `<input type="checkbox" [(ngModel)]="showMe">
						 <span *myIf="showMe">You can see me!</span> abc`,
})
export class TempComponent {

	showMe: boolean = true;
	
	
}

