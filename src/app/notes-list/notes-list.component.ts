import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Note } from '../interfaces/note.model';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {

  @Input()
  notes: Note[];

  @Input()
  showUnArchiveBtn: boolean;

  @Output()
  deleteNote = new EventEmitter<string>();

  @Output()
  archiveNote = new EventEmitter<string>();

  public delete(noteId: string): void {
    this.deleteNote.emit(noteId);
  }

  public archive(noteId: string): void {
    this.archiveNote.emit(noteId);
  }
}
