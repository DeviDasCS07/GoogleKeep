import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../storage/session.storage.service';
import { Note } from '../interfaces/note.model';
import { NOTES_KEY } from '../constants';

@Component({
  selector: 'app-archive-dashboard',
  templateUrl: './archive-dashboard.component.html',
  styleUrls: ['./archive-dashboard.component.scss']
})
export class ArchiveDashboardComponent implements OnInit {

  public notes: Note[] = [];
  public searchText: string;
  constructor(private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.sessionStorageService.watch(NOTES_KEY).subscribe((notes: Note[]) => {
      if (notes && notes.length > 0) {
      this.notes = notes.filter(note => note.isArchive);
      }
    });
  }
  public onDeleteNote(noteId: string): void {
    this.sessionStorageService.deleteItemById(NOTES_KEY, noteId);
  }

  public onUnArchiveNote(noteId: string): void {
    this.sessionStorageService.clear();
    const noteFound = this.notes.findIndex(n => n.id === noteId);
    if (noteFound !== -1) {
      this.notes[noteFound].isArchive = false;
    }
    this.notes.forEach(note => {
      this.sessionStorageService.set(NOTES_KEY, note);
    });
    this.notes = this.notes.filter(n => n.isArchive);
  }

  public onInputTextChanged(inputText: string): void {
    this.searchText = inputText;
   }
}
