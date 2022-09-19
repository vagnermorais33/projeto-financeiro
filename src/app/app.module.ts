import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MaterialExampleModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { Dialog } from '@angular/cdk/dialog';
import { DialogInseririTransacaoComponent } from './componentes/dialog-inseriri-transacao/dialog-inseriri-transacao.component';
import { DialogEditarTransacaoComponent } from './componentes/dialog-editar-transacao/dialog-editar-transacao.component';
import { DialogInserirProdutoComponent } from './componentes/dialog-inserir-produto/dialog-inserir-produto.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { DialogEditarProdutoComponent } from './componentes/dialog-editar-produto/dialog-editar-produto.component';




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
    
    
    
    

    HttpClientModule,

    MaterialExampleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
