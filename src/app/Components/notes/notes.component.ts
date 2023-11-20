import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from '../../Services/notes.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  notes: Array<any> = [];
  
  toggleComp = (i: number)=>{
    this.noteLists.toggleComp(i);
  }

  delete = (i: number)=>{
    this.noteLists.delete(i);
  }

  constructor(private noteLists: NotesService){
    this.notes = noteLists.taskList;
  }

}
