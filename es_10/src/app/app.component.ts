import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MostreComponent } from './mostre/mostre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntroductionComponent,CommonModule,ListComponent,NavigationComponent,MostreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'es_10';
  bottone:boolean=true
  onRiceviDati(value:boolean){
    this.bottone=value;
    console.log(this.bottone);
  }
}
