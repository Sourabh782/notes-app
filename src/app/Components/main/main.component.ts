import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormComponent, NotesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
