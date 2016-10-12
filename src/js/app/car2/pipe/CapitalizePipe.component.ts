import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalizepipe'
})
export class CapitalizePipe implements PipeTransform{
	transform(value: any){
		if (value == undefined || value == null){
			return "";
		}
		return String(value).substring(0,1).toUpperCase() + value.substring(1);
	}
}
