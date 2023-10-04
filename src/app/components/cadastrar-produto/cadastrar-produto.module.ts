import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { CadastrarProdutoRoutingModule } from './cadastrar-produto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';


@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule
  ]
})
export class CadastrarProdutoModule { }
