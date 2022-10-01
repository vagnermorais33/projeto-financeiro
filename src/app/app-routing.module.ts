import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transacoes',
    pathMatch: 'full'
  },
  {
    path: 'transacoes',
    component: PaginaPrincipalComponent,
    data: { title: 'Transações'},
  },
  {
    path: 'pagina1',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    component: Pagina1Component,
    data: { title: 'Produtos'},
  },
  {
    path: 'pagina2',
    component: Pagina2Component,
    data: { title: 'Página 2'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




