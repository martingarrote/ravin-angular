import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  // declarar formulário
  public formularioProduto: FormGroup;
  public mostrar: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Formulario iniciado dentro do ts
  // Funcao para criar formulario (createForm)

  private createForm() {
    this.formularioProduto = this.formBuilder.group({
      name: '',
      description: '',
		  code: '',
		  costPrice: '',
		  salePrice: '',
		  preparationTime: '',
		  productType: ''
    })

    
  }

  enviarFormulario() {
    console.log(this.formularioProduto.value)  
  }

  inverter() {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true
    }
  }

}
