import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [

  // zerar rota
  {path: '', pathMatch: "full", redirectTo: "home"},

  // define rota home com componente respectivo
  {
    path: 'home', 
    loadChildren: () => import("./components/home/home.module")
    .then((m) => m.HomeModule),
  },

  {
    path: "novo", 
    loadChildren: () => import('./components/cadastrar-produto/cadastrar-produto.module')
    .then((m) => m.CadastrarProdutoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
