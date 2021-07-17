import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = NOTES;
  noteID = this.notes.length - 1;

  addToNotes(noteText : string){
    this.noteID++;
    var noteToPush : Note = { id: this.noteID, text: noteText, isFinished: false};
    this.notes.push(noteToPush);
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

  constructor() { }
}
