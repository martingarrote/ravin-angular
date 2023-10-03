import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto';
  private nome: string
  public titulo: string = "Olá pessoas!"

  ngOnInit(): void {
    console.log("Hello world!")

    this.calculadora(10, 6, 8)

    this.verificaString("devs")
    this.verificaString("devs2blu")

    this.calculaJuros(500, 0.5, 9)

    this.contaVogaisConsoantes("pastel")
  }

  funcao(): void {
    console.log("Botão clicado")
  }

  calculadora(nota1: number, nota2: number, nota3: number): void {
    const media: number = (nota1 + nota2 + nota3)/3;
    console.log("A média aritmética é " + media)
  }

  verificaString(texto: String): void {
    const caracteres: number = texto.length;
    let stringDesejada: boolean = false;

    if (texto.toLocaleLowerCase() === "devs2blu") {
      stringDesejada = true
    }

    console.log("Número de caracteres: " + caracteres + "\nÉ devs2blu? " + stringDesejada)
  }

  calculaJuros(valorInicial: number, taxaJuro: number, meses: number): void {
    const calc1: number = (1 + taxaJuro)
    let valorFinal: number = valorInicial + Math.pow(calc1, meses)

    console.log("Valor inicial: " + valorInicial + "\nValor com juros: " + valorFinal);
  }

  contaVogaisConsoantes(texto: string): void {
    let vogais: string[] = ["a", "e", "i", "o", "u"];

    let qtdVogais: number = 0;
    let qtdConsoantes: number = texto.length - qtdVogais;

    for (let l of texto) {
      if (vogais.includes(l.toLocaleLowerCase())) {
        qtdVogais++
      }
    }

    console.log("Vogais: " + qtdVogais + "\nConsoantes: " + qtdConsoantes)
  }

}
