import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent,NavigationComponent,IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'es_9';
}
