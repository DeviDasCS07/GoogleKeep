import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { ArchiveDashboardComponent } from './archive-dashboard/archive-dashboard.component';
import { SearchNotesComponent } from './search-notes/search-notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SessionStorageService } from './storage/session.storage.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotesDashboardComponent,
    ArchiveDashboardComponent,
    SearchNotesComponent,
    NotesListComponent,
    AddNoteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SessionStorageService,
    { provide: 'Window', useValue: window }
  ],
  bootstrap: [AppComponent],
  exports: [SearchNotesComponent],
  entryComponents: [AddNoteComponent]
})
export class AppModule { }
