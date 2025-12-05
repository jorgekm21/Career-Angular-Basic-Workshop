import { Injectable, input } from '@angular/core';
import { Validator } from './validator';

@Injectable({
  providedIn: 'root',
})
export class Products {

  constructor(public validators: Validator){
  }

  productos: any[] = []
  precioTotal = 0

  agregarProducto = (tituloProducto: string, descripcionProducto: string, precioProducto: string, ubicacionProducto: string) : boolean => {

    if (!this.validators.EmptyOrNull(tituloProducto)) return false
    if (!this.validators.EmptyOrNull(descripcionProducto)) return false
    if (!this.validators.EmptyOrNull(precioProducto)) return false
    if (!this.validators.EmptyOrNull(ubicacionProducto)) return false
    
    const precioNumerico = parseInt(precioProducto)
    if (precioNumerico <= 0 || precioNumerico == null) return false

    this.productos.push({
      "titulo": tituloProducto,
      "descripcion": descripcionProducto,
      "precio": precioNumerico,
      "ubicacion": ubicacionProducto
    })

    this.precioTotal += precioNumerico

    return true
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
