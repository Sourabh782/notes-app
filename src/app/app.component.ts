import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainComponent } from './Components/main/main.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}