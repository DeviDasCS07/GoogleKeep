import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-notes',
  templateUrl: './search-notes.component.html',
  styleUrls: ['./search-notes.component.scss']
})
export class SearchNotesComponent implements OnInit {

  @Output()
  inputTextChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onKeyUp(inputEvent: HTMLInputElement): void {
    this.inputTextChanged.emit(inputEvent.value);
  }
}
