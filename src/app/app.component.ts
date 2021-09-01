import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listaTarefas: any[] = [];

  constructor() {
    this.listaTarefas.push('Comprar carvão');
    this.listaTarefas.push('Abastecer o carro');
    this.listaTarefas.push('Pagar o condomínio');
  }
}
