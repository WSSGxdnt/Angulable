import { Component, signal } from '@angular/core';
import { RetoUno } from './reto-uno/reto-uno';
import { RetoDos } from './reto-dos/reto-dos';
import { RetoTres } from './reto-tres/reto-tres';
import { RetoCuatro } from './reto-cuatro/reto-cuatro';
import { RetoCinco } from './reto-cinco/reto-cinco';

@Component({
  imports: [RetoUno, RetoDos, RetoTres, RetoCuatro, RetoCinco],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reto611W');
}
