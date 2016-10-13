import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (process.env['ENV'] === 'production') {
 enableProdMode();
}

/*
import { AppModule } from './app/day3/app.module';
import { AppModule } from './app/day4/app.module';
import { AppModule } from './app/day4/temp/app.module';
*/

import { AppModule } from './app/day4/treeloop/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);