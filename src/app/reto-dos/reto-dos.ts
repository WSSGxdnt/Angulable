import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CurrencyPipe],
  selector: 'app-reto-dos',
  styleUrl: './reto-dos.css',
  templateUrl: './reto-dos.html',
})
export class RetoDos {
  Productos = [{nombre: 'Angular', categoria: 'Desarrollo', precio: 50000},
     {nombre: 'React', categoria: 'Desarrollo', precio: 80000},
     {nombre: 'Vue', categoria: 'Desarrollo', precio:10000},
     {nombre: 'Lua', categoria: 'Desarrollo', precio:100000},
      {nombre: 'Rust', categoria: 'Desarrollo', precio:10000},
     {nombre: 'Java', categoria: 'Desarrollo', precio:200000},];

}
