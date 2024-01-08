import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HelloWorldComponent],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent{
  text : string="secondo";
}