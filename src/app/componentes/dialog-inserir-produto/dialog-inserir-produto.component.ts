import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/Model/produto/produto';
import { ProdutoService } from 'src/app/Model/produto/produto.service';

@Component({
  selector: 'app-dialog-inserir-produto',
  templateUrl: './dialog-inserir-produto.component.html',
  styleUrls: ['./dialog-inserir-produto.component.css']
})
export class DialogInserirProdutoComponent implements OnInit {

  nomeInput: string='';
  valorCompraInput: number=0;
  estoqueInput: number=0;
 

  constructor(
    public dialogRef: MatDialogRef<DialogInserirProdutoComponent>,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  salvar(){

    let produtoObj = this.formToModel();

    let that = this;

    this.produtoService.insert(produtoObj).subscribe(
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

