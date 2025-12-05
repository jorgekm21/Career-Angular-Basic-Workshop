import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Validator {
  
  EmptyOrNull(texto:string) :boolean{
    if(texto == null) return false
    else if (texto.trim() == "") return false
    else return true
  }
}
