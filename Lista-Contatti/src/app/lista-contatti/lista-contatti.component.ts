import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {

   persona = [

    {nome: "Martin", cognome: "Garrix", numero: "000", età:45, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "iginio", cognome: "massari", numero: "111", età:21, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "giorgio", cognome: "locatelli", numero: "222", età:48, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "Antonino", cognome: "Cannavacciuolo", numero: "333", età:36, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "fabio", cognome: "quagliarella", numero: "444", età:55, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "antonio", cognome: "sbancatore", numero: "999", età:67, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "luca", cognome: "minasi", numero: "888", età:53, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "checco", cognome: "zalone", numero: "555", età:42, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "stefano", cognome: "lepri", numero: "666", età:29, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },

    {nome: "toto", cognome: "riina", numero: "777", età:78, colore:"lightgreen", isOnline:true, immagine:"../../assets/antonino_.jpg"  },


   ]
}
