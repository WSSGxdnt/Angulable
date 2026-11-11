import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-reto-cuatro',
  styleUrl: './reto-cuatro.css',
  templateUrl: './reto-cuatro.html',
})
export class RetoCuatro {

  Rojo = 'red';
  Narangita = 'yellow';
  Verdesito = 'green';

  Estado = 'red';

  cambioColorRojo() {
    this.Estado = this.Rojo;
  } 

  cambioColorNarangita() {
    this.Estado = this.Narangita;
  }

  cambioColorVerdesito() {
    this.Estado = this.Verdesito;
  }
}
