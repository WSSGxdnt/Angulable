import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}


@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-reto-cinco',
  styleUrl: './reto-cinco.css',
  templateUrl: './reto-cinco.html',
})


export class RetoCinco {

  nombre: string = '';
  cantidad: number = 0;
  precio: number = 0;

  productos: Producto[] = [];

  registrarProducto() {

    if (this.nombre.trim() === '') {
      return;
    }

    if (!Number.isInteger(this.cantidad) || this.cantidad < 0) {
      return;
    }

    if (!Number.isFinite(this.precio) || this.precio < 0) {
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: this.nombre.trim(),
      cantidad: this.cantidad,
      precio: this.precio
    };

    this.productos.push(nuevoProducto);
    this.nombre = '';
    this.cantidad = 0;
    this.precio = 0;
  }

  calcularTotal(producto: Producto): number {
    return producto.cantidad * producto.precio;
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(
      producto => producto.id !== id
    );
  }
}
