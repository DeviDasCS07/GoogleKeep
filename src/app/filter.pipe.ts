import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './interfaces/note.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Note[], searchText: string): Note[] {
    if (!items) {
      return [];
    }

    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText);
    });
   }
}
