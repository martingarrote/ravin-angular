import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public logo: string = "./src/assets"
  public inicio: string = "Início";
  public cadastrarProduto: string = "Cadastrar produto";

  ngOnInit(): void {
  }

}
