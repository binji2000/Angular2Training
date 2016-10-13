import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';


@Injectable()
export class Products {
	private readonly baseUrl: string = 'http://svc.treeloop.com/products';

	constructor(private http: Http){

	}

	getAll(){
		return this.http.get(this.baseUrl).toPromise();
	}

	getProduct(id: number){
		return this.http.get(this.baseUrl + '/' + id).toPromise();
	}

}
