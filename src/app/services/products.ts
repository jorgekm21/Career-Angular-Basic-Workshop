import { Injectable, input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {

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

  eliminarProducto = (idProducto: string): void => {
    const elemento = document.getElementById(idProducto) as HTMLElement
    const precioTexto = elemento?.children[4].innerHTML ?? "$0"

    const precio = parseInt(precioTexto.substring(1))

    this.precioTotal -= precio
    elemento.remove()
  }

  retornarElemento = (elementoOriginal: string, numeroHijo: number, idAnterior: string, atributoAngular: string) => (event: Event) => {
    const evento = event.target as HTMLInputElement
    const elementoViejo = document.createElement(elementoOriginal)
    elementoViejo.id = idAnterior
    elementoViejo.innerHTML = evento.value
    elementoViejo.setAttribute(atributoAngular, '')
    elementoViejo.addEventListener("dblclick", () => {
      this.editarTitulo(numeroHijo.toString())
    })
    const elementoActual = document.getElementById(evento.id)
    elementoActual?.children[numeroHijo].replaceWith(elementoViejo)
  }

  editarTitulo = (idProducto: string): void =>{
    const elemento = document.getElementById(idProducto) as HTMLElement
    const valor = elemento?.children[2].innerHTML ?? ""

    let ngContentAttr = '';
    
    for (let i = 0; i < elemento.children[2].attributes.length; i++) {
        const attr = elemento.children[2].attributes[i];
        if (attr.name.startsWith('_ngcontent-')) {
            ngContentAttr = attr.name;
            break;
        }
    }

    const input = document.createElement("input")
    input.id = idProducto
    input.value = valor
    input.addEventListener("focusout", this.retornarElemento(elemento.children[2].tagName.toLowerCase(), 2, elemento.id, ngContentAttr).bind(this))
    elemento?.children[2].replaceWith(input)
  }

  editarDescripcion = (idProducto: string): void =>{
    const elemento = document.getElementById(idProducto) as HTMLElement
    const valor = elemento?.children[2].innerHTML == ""
  }

  editarPrecio = (idProducto: string): void =>{
    const elemento = document.getElementById(idProducto) as HTMLElement
    const valor = elemento?.children[2].innerHTML == ""
  }

  editarUbicacion = (idProducto: string): void =>{
    const elemento = document.getElementById(idProducto) as HTMLElement
    const valor = elemento?.children[2].innerHTML == ""
  }
}
