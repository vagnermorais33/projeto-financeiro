import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';

const routes: Routes = [
  {
    path:'pagina1',
    component:Pagina1Component
  },

  {
   path:'pagina2',
   component:Pagina2Component
  },
  {
    path:'',
    component:PaginaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




