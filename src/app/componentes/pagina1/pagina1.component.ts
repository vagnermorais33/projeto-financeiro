import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/Model/produto/produto';
import { ProdutoService } from 'src/app/Model/produto/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogInserirProdutoComponent } from '../dialog-inserir-produto/dialog-inserir-produto.component';
import { DialogEditarProdutoComponent } from '../dialog-editar-produto/dialog-editar-produto.component';
import { MatPaginator, PageEvent, } from '@angular/material/paginator';



@Component({
  
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {
  
  produtos: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'valorCompra', 'estoque', 'acoes'];
  //dataSource: any;
  //dataSource: MatTableDataSource<Produto> = new MatTableDataSource;
  dataSource: MatTableDataSource<Produto> = new MatTableDataSource([] as Produto[]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalDeLinhas = 10;
  limiteDeLinhas = 5;
  pagina = 0;
  pageSizeOptions1: number[] = [5, 10, 25, 100];
 

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    public dialog: MatDialog,
   
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator;
    this.populaDataSourceEPaginator([] as Produto[]);
  }

  populaDataSourceEPaginator(produtos: Produto[], linhasTotais?: number){
    this.paginator.pageIndex = this.pagina;
    console.log(this.pagina);
    console.log(linhasTotais);
    if(linhasTotais){
      this.paginator.length = linhasTotais;
      // this.totalDeLinhas = linhasTotais;
    }

    this.dataSource = new MatTableDataSource(produtos);

  }

  pageChanged(event: PageEvent) {
    this.limiteDeLinhas = event.pageSize;
    this.pagina = event.pageIndex;
    this.carregarListaDeProdutos();
  }

  ngOnInit() {
    this.carregarListaDeProdutos();
    
}

carregarListaDeProdutos(){
  let that = this;

  //this.produtoService.selectAll().subscribe(
    this.produtoService.selectAll(this.pagina, this.limiteDeLinhas).subscribe(
    {
      //next(produtos){
       // console.log(produtos);
       // that.dataSource = new MatTableDataSource(produtos);
       next(resposta){
        that.populaDataSourceEPaginator(resposta.items, resposta.count);
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

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

 
