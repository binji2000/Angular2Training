import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (process.env['ENV'] === 'production') {
 enableProdMode();
}

/*
import { AppModule } from './app/day1/app.module';
import { AppModule } from './app/day2/app.module';
import { AppModule } from './app/day3/app.module';
import { AppModule } from './app/day4/app.module';
import { AppModule } from './app/day5/app.module';
import { AppModule } from './app/attributeDirective/app.module';
import { AppModule } from './app/structuredirective/app.module';
*/


import { AppModule } from './app/day5/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);