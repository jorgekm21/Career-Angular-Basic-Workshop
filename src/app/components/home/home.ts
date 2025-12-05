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
}
