import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/Model/produto/produto';
import { ProdutoService } from 'src/app/Model/produto/produto.service';

@Component({
  selector: 'app-dialog-editar-produto',
  templateUrl: './dialog-editar-produto.component.html',
  styleUrls: ['./dialog-editar-produto.component.css']
})
export class DialogEditarProdutoComponent implements OnInit {

  nomeInput: string='';
  valorCompraInput: number=0;
  estoqueInput: number=0;
  produto:any;

  constructor(
    public dialogRef: MatDialogRef<DialogEditarProdutoComponent>,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.produto = this.data.produto;
}

editar(){

  let that = this;

  this.produtoService.update(this.produto
    ).subscribe(
    {
      next(produto: any){
        that.dialogRef.close(produto);
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

formToModel(): Produto{

  let produtoParaSalvar = {
    nome: this.nomeInput,
    valorCompra: this.valorCompraInput,
    estoque: this.estoqueInput
  } as Produto;

  return produtoParaSalvar;

  // let transacaoParaSalvar = {} as Transacao;
  // transacaoParaSalvar.descricao = this.descricaoInput;
  // transacaoParaSalvar.valor = this.valorInput;
  // transacaoParaSalvar.tipo = this.tipoInput;
}
//botao cancelar Dialog
cancelar(){
  this.dialogRef.close();
}

}
