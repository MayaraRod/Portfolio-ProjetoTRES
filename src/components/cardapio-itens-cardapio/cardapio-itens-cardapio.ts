import { Component } from '@angular/core';

/**
 * Generated class for the CardapioItensCardapioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardapio-itens-cardapio',
  templateUrl: 'cardapio-itens-cardapio.html'
})
export class CardapioItensCardapioComponent {

  text: string;

  constructor() {
    console.log('Hello CardapioItensCardapioComponent Component');
    this.text = 'Hello World';
  }

}
