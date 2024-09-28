import { Pipe, PipeTransform } from '@angular/core';
import { IGames } from '../interfaces/igames';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObj: IGames[], term: string): any[] {
    return arrayOfObj.filter( (item)=> item.genre.toLowerCase().includes(term.toLowerCase()) || item.title.toLowerCase().includes(term.toLowerCase()) );
  }

}
