import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string = 'Wesley';
  idade: number = 109;


  getTextoCompleto(): string {
    return `Olá, sou ${this.nome} e tenho ${this.idade} de idade`
  }
}
