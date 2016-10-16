import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize'
})
export default class CapitalizePipe implements PipeTransform{
	transform(value: any, strToAppend: string){
		if (value == undefined || value == null){
			return "";
		}
		return String(value).substring(0,1).toUpperCase() + value.substring(1) + String(strToAppend);
	}
}
