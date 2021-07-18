import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-category',
  templateUrl: './notes-category.component.html',
  styleUrls: ['./notes-category.component.css']
})
export class NotesCategoryComponent implements OnInit {
  @Input() note?: Note;
  notes = this.notesService.getNotes();
  selectedNote?: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.noteAddSubscription.subscribe((text : any) =>{
      this.notes.unshift({
          id: 100,
          text: text.noteText,
          isFinished: false
        })
    }); 
  }

  onSelect(note: Note): void{
    this.selectedNote = note;
    console.log(this.selectedNote);
  }

}
