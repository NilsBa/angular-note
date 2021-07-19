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

  constructor() { }

  noteAddHandler(noteText: string){
    let note = {id: this.getNewNoteID(), text: noteText, isFinished: false};
    console.log(note);
    this.noteAddSubscription.next(note);
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

  checkNote(note: Note){
    let index = this.findNote(note);
    this.notes[index].isFinished = !this.notes[index].isFinished
  }
}
