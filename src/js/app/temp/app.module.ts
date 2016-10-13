/* import module from @angular, the modules also need to be added to the @NgModule.imports */
import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


/* import module from files, the modules also need to be added to the @NgModule.declarations */
import { AppComponent } from './day3/car2.component';
import { MinLenValidatorDirective } from './day3/directive/MinLenValidatorDirective';
import { CarTableComponent } from './day3/carTable.component';
import { MyHeaderComponent } from './day3/header.component';
import { CarBuilderComponent } from './day3/carBuilder.component';
import { CapitalizePipe } from './day3/pipe/CapitalizePipe.component';

import '../../css/styles.scss';

/* specify the entry point is AppCompent, which is in /day3/car2.component */
@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent,MyHeaderComponent,CarTableComponent,CarBuilderComponent,CapitalizePipe,MinLenValidatorDirective ],
	bootstrap: [ AppComponent ]
})

export class AppModule{

}