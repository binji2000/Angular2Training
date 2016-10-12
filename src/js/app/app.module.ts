import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import '../../css/styles.scss';
import { AppComponent,MyHeaderComponent } from './car2/car2.component';
import { CarTableComponent } from './car2/carTable.component';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent,MyHeaderComponent,CarTableComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule{

}