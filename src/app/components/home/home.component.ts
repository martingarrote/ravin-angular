import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/@core/Product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listaDeProdutos: ProductModel[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService
    .listAll()
    .subscribe((produtos) => {
      this.listaDeProdutos = produtos;
    });
  }

}
