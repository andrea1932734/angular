import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'es_ripasso';
}
