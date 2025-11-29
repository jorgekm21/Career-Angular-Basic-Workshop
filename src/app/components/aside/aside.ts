import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [NgStyle],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  activo = true

  resetear = () : void => {
    const header = document.getElementById("header") as HTMLElement
    const footer = document.getElementById("footer") as HTMLElement
    const menu_aside = document.getElementById("menu_aside") as HTMLElement
    const inputColor = document.getElementById("color") as HTMLInputElement

    header.style.backgroundColor = "#ffe600"
    footer.style.backgroundColor = "#ffe600"
    menu_aside.style.backgroundColor = "#ffe600"
    inputColor.value = "#ffe600"

    this.activo = true
  }

  cambiarColor = () : void => {
    const header = document.getElementById("header") as HTMLElement
    const footer = document.getElementById("footer") as HTMLElement
    const menu_aside = document.getElementById("menu_aside") as HTMLElement
    const inputColor = document.getElementById("color") as HTMLInputElement

    console.log("Colocando color: " + inputColor.value)
    header.style.backgroundColor = inputColor.value
    footer.style.backgroundColor = inputColor.value
    menu_aside.style.backgroundColor = inputColor.value

    this.activo = false
  }
}
