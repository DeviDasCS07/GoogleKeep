import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { ArchiveDashboardComponent } from './archive-dashboard/archive-dashboard.component';


const routes: Routes = [
  {
    path: 'NotesDashBoard', component: NotesDashboardComponent,
  },
  {
    path: 'ArchiveDashBoard', component: ArchiveDashboardComponent
  },
  {
    path: '**', component: NotesDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
