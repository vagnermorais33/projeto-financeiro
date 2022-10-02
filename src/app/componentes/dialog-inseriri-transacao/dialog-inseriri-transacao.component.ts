import { TransacaoService } from 'src/app/Model/transacao/transacao.service';
import { Transacao } from 'src/app/Model/transacao/transacao.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-inseriri-transacao',
  templateUrl: './dialog-inseriri-transacao.component.html',
  styleUrls: ['./dialog-inseriri-transacao.component.css']
})
export class DialogInseririTransacaoComponent implements OnInit {

  descricaoInput: string = '';
  valorInput: number = 0;
  tipoInput: string = '';


  constructor(
    public dialogRef: MatDialogRef<DialogInseririTransacaoComponent>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);

    
  }

  salvar(){

    let transacaoParaSalvar = this.formToModel();

    let that = this;

    this.transacaoService.selectUltimoSaldo().subscribe(
      saldo=>{
        if(saldo){
          
          if(transacaoParaSalvar.tipo == "ENTRADA"){

            transacaoParaSalvar.saldo = Number (saldo) + Number (transacaoParaSalvar.valor)
            this.salvarTransacao(transacaoParaSalvar);

          }else if(transacaoParaSalvar.tipo == "SAIDA"){

            transacaoParaSalvar.saldo = Number (saldo) - Number (transacaoParaSalvar.valor)
            this.salvarTransacao(transacaoParaSalvar);
          }
         // SALVAR TRANSAÇÃO
        }
      }
    )

  }

  salvarTransacao(transacaoParaSalvar: Transacao){

    let that = this;

    this.transacaoService.insert(transacaoParaSalvar).subscribe(
      {
        next(transacao){
          that.dialogRef.close(transacao);
        },
        error(err){
          console.error(err);
        },
        complete(){
          //console.log("requisição completa");
        }
      }
    );

  }

  formToModel(): Transacao{

    let transacaoParaSalvar = {
      descricao: this.descricaoInput,
      valor: this.valorInput,
      tipo: this.tipoInput
    } as Transacao;

    return transacaoParaSalvar;

    
  }
 //botao cancelar Dialog
  cancelar(){
    this.dialogRef.close();
  }

}


