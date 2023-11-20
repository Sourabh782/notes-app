import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../Services/notes.service';

@Component({ 
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title: string = "";
  description: string = "";

  notes: Array<any> = [];

  constructor(private note: NotesService){
    this.notes = note.taskList;
  }

  setDetails = ()=>{
    this.note.addTask(this.title, this.description);
    this.title = "";
    this.description = "";
  }
}
