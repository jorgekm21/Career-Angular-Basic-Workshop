import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Products } from '../../services/products';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public productos: Products){
  }

  guardarProducto(){
    const tituloProducto = document.getElementById("titulo") as HTMLInputElement
    const descripcionProducto = document.getElementById("descripcion") as HTMLInputElement
    const precioProducto = document.getElementById("precio") as HTMLInputElement
    const ubicacionProducto = document.getElementById("ubicacion") as HTMLInputElement

    if (!this.productos.agregarProducto(tituloProducto.value, descripcionProducto.value, precioProducto.value, ubicacionProducto.value)) alert("No se pudo agregar el producto")
  }
}
