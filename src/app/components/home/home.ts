import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  productos: any[] = []
  precioTotal = 0

  agregarProducto = () : void => {
    const tituloProducto = document.getElementById("titulo") as HTMLInputElement
    const descripcionProducto = document.getElementById("descripcion") as HTMLInputElement
    const precioProducto = document.getElementById("precio") as HTMLInputElement
    const ubicacionProducto = document.getElementById("ubicacion") as HTMLInputElement

    if (tituloProducto.value == "" || tituloProducto.value == null){
      alert("Introduce el titulo del producto")
      return
    }

    if (descripcionProducto.value == "" || descripcionProducto.value == null){
      alert("Introduce el descripcion del producto")
      return
    }

    const precioNumerico = parseInt(precioProducto.value)
    if (precioNumerico <= 0 || precioNumerico == null){
      alert("Introduce el precio del producto")
      return
    }

    if (ubicacionProducto.value == "" || ubicacionProducto.value == null){
      alert("Introduce el ubicacion del producto")
      return
    }

    this.productos.push({
      "titulo": tituloProducto.value,
      "descripcion": descripcionProducto.value,
      "precio": precioNumerico,
      "ubicacion": ubicacionProducto.value
    })

    this.precioTotal += precioNumerico
  }
}
