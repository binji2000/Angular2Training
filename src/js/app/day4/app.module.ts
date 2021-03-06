/* import module from @angular, the modules also need to be added to the @NgModule.imports */
import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


/* import module from files, the modules also need to be added to the @NgModule.declarations */
import { TreeloopComponent } from './component/treeloop.component';
import { ProductDetailComponent } from './component/detail.component';

import '../../../css/styles.scss';

/* specify the entry point is AppCompent, which is in /component/car2.component */
@NgModule({
	imports: [ BrowserModule, FormsModule, HttpModule ],
	declarations: [ TreeloopComponent,ProductDetailComponent ],
	bootstrap: [ TreeloopComponent ]
})
export class AppModule{

}