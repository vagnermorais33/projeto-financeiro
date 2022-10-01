import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/app/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogConfirmacaoExclusao } from './componentes/dialog-confirmacao-exclusao/dialog-confirmacao-exclusao.component';
import { DialogEditarProdutoComponent } from './componentes/dialog-editar-produto/dialog-editar-produto.component';
import { DialogEditarTransacaoComponent } from './componentes/dialog-editar-transacao/dialog-editar-transacao.component';
import { DialogInserirProdutoComponent } from './componentes/dialog-inserir-produto/dialog-inserir-produto.component';
import {
  DialogInseririTransacaoComponent,
} from './componentes/dialog-inseriri-transacao/dialog-inseriri-transacao.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    PaginaPrincipalComponent,
    DialogInseririTransacaoComponent,
    DialogEditarTransacaoComponent,
    DialogInserirProdutoComponent,
    DialogEditarProdutoComponent,
    DialogConfirmacaoExclusao,
    
    

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatPaginatorModule,
    
  
    HttpClientModule,

    MaterialExampleModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
