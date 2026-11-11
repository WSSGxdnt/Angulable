import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto-tres',
  styleUrl: './reto-tres.css',
  templateUrl: './reto-tres.html',
})

export class RetoTres {
  nombre: string = '';
  programa: string = '';
  edad: number | null = null;

  estudiantes: any[] = [];

  registrar() {
  if (this.nombre.trim() === '' || this.programa.trim() === '' || this.edad === null) {
    return;
  }

  if (!Number.isInteger(this.edad) || this.edad < 1 || this.edad > 100) {
        return;
  }

  const estudiante = {
    nombre: this.nombre,
    programa: this.programa,
    edad: this.edad
  };

  this.estudiantes.push(estudiante);

  this.nombre = '';
  this.programa = '';
  this.edad = null;

}
}
