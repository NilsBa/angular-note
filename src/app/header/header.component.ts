import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'My Notes';
  selectedNote?: Note;
  noteText: string = '';

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  addNoteHandler(){
    this.notesService.noteAddHandler(this.noteText);
  }

}
