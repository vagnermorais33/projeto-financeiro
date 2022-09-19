import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/Model/produto/produto';
import { ProdutoService } from 'src/app/Model/produto/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogInserirProdutoComponent } from '../dialog-inserir-produto/dialog-inserir-produto.component';
import { DialogEditarProdutoComponent } from '../dialog-editar-produto/dialog-editar-produto.component';

@Component({
  
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  produtos: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'valorCompra', 'estoque', 'acoes'];
  dataSource: any;

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
 this.carregarListaDeProdutos();
}

carregarListaDeProdutos(){
  let that = this;

  this.produtoService.selectAll().subscribe(
    {
      next(produtos){
        console.log(produtos);
        that.dataSource = new MatTableDataSource(produtos);
      },
      error(err: any){
        console.error(err);
      },
      complete(){
        console.log("requisição completa");
      }
    }
  );
}

  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAddProduto(){
    const dialogRef = this.dialog.open(DialogInserirProdutoComponent, {
      width: '1000px',
      data: {a: "aaaa"}
   });

    dialogRef.afterClosed().subscribe(result => {
       //if(result && result.id) this.transacoes = this.transacoes.concat([result]);
       this.carregarListaDeProdutos();
    });

  }

  openDialogEditarProduto(obj?: Produto){
    const dialogRef = this.dialog.open(DialogEditarProdutoComponent, {
      width: '1000px',
      data: {produto: obj}
   });

    dialogRef.afterClosed().subscribe(result => {
       //if(result && result.id) this.transacoes = this.transacoes.concat([result]);
       this.carregarListaDeProdutos();
    });

  }
  deletar(obj: Produto){
    let that = this;

    this.produtoService.delete(obj.id as number).subscribe(
      {
        next(produto){

          that.carregarListaDeProdutos();

        },
        error(err){
          console.error(err);
        },
        complete(){
          console.log("requisição completa");
        }
      }
    );
  }
}

 
