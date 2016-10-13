/* import module from @angular, the modules also need to be added to the @NgModule.imports */
import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


/* import module from files, the modules also need to be added to the @NgModule.declarations */
import { AppComponent } from './component/car4.component';
import { CarTableComponent } from './component/carTable.component';
import { MyHeaderComponent } from './component/header.component';
import { CarBuilderComponent } from './component/carBuilder.component';
import { MinLenDirective } from './directive/MinLenDirective';
import { CapitalizePipe } from './pipe/CapitalizePipe.component';

import '../../../css/styles.scss';

/* specify the entry point is AppCompent, which is in /component/car2.component */
@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent,MyHeaderComponent,CarTableComponent,CarBuilderComponent,CapitalizePipe,MinLenDirective ],
	bootstrap: [ AppComponent ]
})

export class AppModule{

}