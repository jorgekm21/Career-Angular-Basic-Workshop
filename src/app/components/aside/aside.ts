import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  activo = true
  

  filtrar = () : void => {
    console.log("Borando elementos....")
    const elementos = document.getElementsByClassName("mazda") as HTMLCollectionOf<HTMLElement>

    for (let i = 0; i < elementos.length; i++){
      elementos[i].style.display = 'none'
    }

    this.activo = false
  }

  resetear = () : void => {
    console.log("Reseteando estilos....")
    const elementos = document.getElementsByClassName("mazda") as HTMLCollectionOf<HTMLElement>
    console.log(elementos)

    const header = document.getElementById("header") as HTMLElement
    const footer = document.getElementById("footer") as HTMLElement
    const inputColor = document.getElementById("color") as HTMLInputElement

    header.style.backgroundColor = "#ffe600"
    footer.style.backgroundColor = "#ffe600"
    inputColor.value = "#ffe600"

    for (let i = 0; i < elementos.length; i++){
      elementos[i].style.display = 'block'
    }

    this.activo = true
  }

  cambiarColor = () : void => {
    const header = document.getElementById("header") as HTMLElement
    const footer = document.getElementById("footer") as HTMLElement
    const inputColor = document.getElementById("color") as HTMLInputElement

    console.log("Colocando color: " + inputColor.value)
    header.style.backgroundColor = inputColor.value
    footer.style.backgroundColor = inputColor.value
  }
}
