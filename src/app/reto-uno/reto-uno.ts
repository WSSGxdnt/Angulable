import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto-uno',
  styleUrl: './reto-uno.css',
  templateUrl: './reto-uno.html',
})
export class RetoUno {

  contadoruno = 0;
  contadordos = 0;

  resultado = 0;

  sumar(){
    this.resultado = this.contadoruno + this.contadordos;
  }

  restar(){
    this.resultado = this.contadoruno - this.contadordos;
  }
  
}
