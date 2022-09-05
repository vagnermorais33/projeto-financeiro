import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/Model/produto/produto';
import { ProdutoService } from 'src/app/Model/produto/produto.service';

@Component({
  
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  produtos: Produto[] = [];

  displayedColumns: string[] = ['id', 'nome', 'valorCompra', 'estoque'];
  dataSource: any;

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {

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

    // let transacao1: Transacao = {
    //   id:1,
    //   ativo: true,
    //   createdAt: "2022-08-18",
    //   updatedAt: "2022-08-18",
    //   descricao: "teste",
    //   valor: 100,
    //   saldo: 200,
    //   tipo: "ENTRADA"
    // };


  }


  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
