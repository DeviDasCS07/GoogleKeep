import { Component } from '@angular/core';
import { Note } from '../interfaces/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {

  public note: Note = {
    id: '',
    title: '',
    description: '',
    isArchive: false
  };
}
