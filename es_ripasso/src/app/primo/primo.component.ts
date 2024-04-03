import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-primo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.css'
})
export class PrimoComponent {

  name = "inizio";
  clickBottone(link: string){
    window.open(link);
    
  }
  setBtn(nomeT: string){
    if(nomeT == "milano" ){
      this.name = "milano";
    }
    if(nomeT == "new york" ){
      this.name = "new york";
    }
    if(nomeT == "amsterdam" ){
      this.name = "amsterdam";
    }
    if(nomeT == "tenerife" ){
      this.name = "tenerife";
    }
    if(nomeT == "lisbona" ){
      this.name = "lisbona";
    }
  
  }



  posti = [
    {nome : "milano", nazione : "italia", immaggine : "https://www.google.com/imgres?q=milano&imgurl=https%3A%2F%2Fwww.ilpost.it%2Fwp-content%2Fuploads%2F2019%2F12%2Fmilano.jpg&imgrefurl=https%3A%2F%2Fwww.ilpost.it%2F2019%2F12%2F07%2Fmilano-cose-da-vedere%2F&docid=1PB4osvv912R4M&tbnid=-4tp-JKlEgkT3M&vet=12ahUKEwjU04PA1KaFAxWU_7sIHVzUDXYQM3oECB8QAA..i&w=800&h=403&hcb=2&ved=2ahUKEwjU04PA1KaFAxWU_7sIHVzUDXYQM3oECB8QAA"},
    {nome : "new york", nazione : "usa", immaggine : ""},
    {nome : "amsterdam", nazione : "olanda", immaggine : ""},
    {nome : "tenerife", nazione : "spagna", immaggine : ""},
    {nome : "lisbona", nazione : "portogallo", immaggine : ""},
    
  ]

}
