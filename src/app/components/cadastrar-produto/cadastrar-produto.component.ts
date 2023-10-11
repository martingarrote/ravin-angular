import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss'],
})
export class CadastrarProdutoComponent implements OnInit {
  public productForm: FormGroup;

  public productTypes: string[] = ["SNACK", "DRINK", "DESSERT"]

  constructor(private formBuilder: FormBuilder, 
              private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Formulario iniciado dentro do ts
  // Funcao para criar formulario (createForm)

  public salvarProduto() {
    const jsonPronto = this.productForm.value
    this.produtoService.create(jsonPronto).subscribe(e => console.log(e))
  }

  private createForm() {
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
		  code: '',
		  costPrice: '',
		  salePrice: '',
		  preparationTime: '',
		  productType: ''
    })
  }
}
