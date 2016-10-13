import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Products } from '../service/Products.svc';



@Component({
	selector: 'my-app',
	template: require('./treeloop.component.html'),
	providers: [Products]
})
export class TreeloopComponent implements OnInit{
	productList:	any[];

	product: any;

	constructor (private products: Products) {
	}

	ngOnInit(){
		this.products.getAll().then(results => {
			this.productList = results.json();
		}); 
	}

	btnViewDetail(id: number){
		console.log(id);
			this.products.getProduct(id).then(results => {
		  console.log(results.json());
			this.product = results.json();
		});
	}


}

