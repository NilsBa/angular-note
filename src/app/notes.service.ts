import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './mock-notes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  noteAddSubscription = new Subject();

  notes: Note[] = NOTES;
  noteID = this.notes.length - 1;
  //selectedNote: Note = this.notes[0];

  constructor() { }

  noteAddHandler(noteText: string){
    let newNote:Note = {id: this.getNewNoteID(), text: noteText, isFinished: false};
    this.noteAddSubscription.next({newNote});
  }

  getNewNoteID(){
    this.noteID = this.notes.length;
    return this.noteID;
  }

  getNotes(){
    return this.notes;
  }

  deleteNote(note: Note){
    this.notes.splice(this.findNote(note), 1);
  }

  findNote(note: Note){
    let noteIndex = this.notes.findIndex(n => n.id === note.id);
    return noteIndex;
  }
}
