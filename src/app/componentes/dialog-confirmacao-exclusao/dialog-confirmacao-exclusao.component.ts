import { TransacaoService } from 'src/app/Model/transacao/transacao.service';
import { Transacao } from 'src/app/Model/transacao/transacao.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-confirmacao-exclusao',
  templateUrl: './dialog-confirmacao-exclusao.component.html',
  styleUrls: ['./dialog-confirmacao-exclusao.component.css']
})

export class DialogConfirmacaoExclusao implements OnInit {

  transacao = {} as Transacao;

  descricaoInput: string = '';
  valorInput: number = 0;
  tipoInput: string = '';


  constructor(
    public dialogRef: MatDialogRef<DialogConfirmacaoExclusao>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.transacao = this.data.transacao;
  }

  deletar(){
    let that = this;

    this.transacaoService.delete(this.transacao.id as number).subscribe(
      {
        next(transacao){
          that.dialogRef.close(transacao);
        },
        error(err){
          console.error(err);
        },
        complete() {},
      }
    )
  }

  cancelar(){
    this.dialogRef.close();
  }

}
