import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss'],
})
export class CadastrarProdutoComponent implements OnInit {
  public productForm: FormGroup;

  public productTypes: string[] = ["SNACK", "DRINK", "DESSERT"]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Formulario iniciado dentro do ts
  // Funcao para criar formulario (createForm)

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

  sendForm() {
    console.log(this.productForm.value)  
  }

}
