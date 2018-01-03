import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string = 'Wesley';
 

  alterarNome(input: any) {
    // console.log(input);
    this.nome = input.target.value;
  }


  adicionar(){
    console.log(`Adicionando ${this.nome}`);

    // Math.random() * 100 -> numero inteiro até sem aleatório.
    // Math.round(x) arredonda o numero.
    const numero = Math.round(Math.random() * 100);

    this.nome = `João ${numero}`;

  }

}
