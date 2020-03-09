import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NOTES_KEY } from '../constants';

import { Note } from '../interfaces/note.model';
import { UUID } from 'angular2-uuid';
import { SessionStorageService } from '../storage/session.storage.service';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.scss']
})
export class NotesDashboardComponent implements OnInit {

  public notes: Note[] = [];
  public searchText: string;

  constructor(
    private readonly dialog: MatDialog,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit() {
    this.sessionStorageService.watch(NOTES_KEY).subscribe((notes: Note[]) => {
      this.notes = [];
      if (notes && notes.length > 0) {
      this.notes = notes.filter(note => !note.isArchive);
      }
    });
  }

  public onInputTextChanged(inputText: string): void {
   this.searchText = inputText;
  }

  public openAddNoteDialog(): void {
    const dialogRef = this.dialog.open(AddNoteComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe((note: Note) => {
      if (note) {
      note.id = UUID.UUID();
      this.sessionStorageService.set(NOTES_KEY, note);
      }
    });
  }

  public onDeleteNote(noteId: string): void {
    this.sessionStorageService.deleteItemById(NOTES_KEY, noteId);
  }

  public onArchiveNote(noteId: string): void {
    this.sessionStorageService.clear();
    const noteFound = this.notes.findIndex(n => n.id === noteId);
    if (noteFound !== -1) {
      this.notes[noteFound].isArchive = true;
    }
    this.notes.forEach(note => {
      this.sessionStorageService.set(NOTES_KEY, note);
    });
    this.notes = this.notes.filter(n => !n.isArchive);
  }
}
