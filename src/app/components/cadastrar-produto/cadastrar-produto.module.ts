import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { CadastrarProdutoRoutingModule } from './cadastrar-produto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastrarProdutoModule { }
