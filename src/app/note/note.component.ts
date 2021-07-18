import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteTest: Note = {id: 0, text: '', isFinished: false};
  @Input() note?: Note;
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  deleteNoteHandler(){
    this.noteService.deleteNote(this.note || this.noteTest);
  }
  

}
