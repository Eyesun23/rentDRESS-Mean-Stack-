import { Pipe, PipeTransform } from '@angular/core';
import {Dress} from './dress'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<Dress>, searchStr: string): Array<Dress> {
    if(!value) {return value;}
  return value.filter(dress => {
    return dress.name.toLowerCase().includes(searchStr.toLowerCase()) || dress.description.toLowerCase().includes(searchStr.toLowerCase())

  })
  }
}
