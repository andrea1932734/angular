import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  polaretti=[
    {destinazione:"teegarden-b",appartenenza:"",durata:"", pianetadipartenza:"",partenza:"",arrivo:"",costo:"",immagine:""},
    {destinazione:"",appartenenza:"",durata:"", pianetadipartenza:"",partenza:"",arrivo:"",costo:"",immagine:""},
    {destinazione:"",appartenenza:"",durata:"", pianetadipartenza:"",partenza:"",arrivo:"",costo:"",immagine:""},
    {destinazione:"",appartenenza:"",durata:"", pianetadipartenza:"",partenza:"",arrivo:"",costo:"",immagine:""},
    {destinazione:"",appartenenza:"",durata:"", pianetadipartenza:"",partenza:"",arrivo:"",costo:"",immagine:""},
    
  ]
}
