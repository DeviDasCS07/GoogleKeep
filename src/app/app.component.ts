import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Google-Keep';

  constructor(private router: Router){
  }

  public navigateToNotesDashBoard(): void {
    this.router.navigate(['/NotesDashBoard']);
  }

  public navigateToArchivesDashBoard(): void {
    this.router.navigate(['/ArchiveDashBoard']);
  }
}
