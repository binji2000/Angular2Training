import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import '../../css/styles.scss';
import { AppComponent } from './car2/car2.component';
import { CarTableComponent } from './car2/carTable.component';
import { MyHeaderComponent } from './car2/header.component';
import { CarBuilderComponent } from './car2/carBuilder.component';
import { CapitalizePipe } from './car2/pipe/CapitalizePipe.component';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent,MyHeaderComponent,CarTableComponent,CarBuilderComponent,CapitalizePipe ],
	bootstrap: [ AppComponent ]
})

export class AppModule{

}