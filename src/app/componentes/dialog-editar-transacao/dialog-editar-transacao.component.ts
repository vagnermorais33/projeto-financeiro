import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transacao } from 'src/app/Model/transacao/transacao.model';
import { TransacaoService } from 'src/app/Model/transacao/transacao.service';

@Component({
  selector: 'app-dialog-editar-transacao',
  templateUrl: './dialog-editar-transacao.component.html',
  styleUrls: ['./dialog-editar-transacao.component.css']
})
export class DialogEditarTransacaoComponent implements OnInit {

transacao: any; 

  constructor(
    public dialogRef: MatDialogRef<DialogEditarTransacaoComponent>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
    this.transacao = this.data.transacao;
    console.log(this.transacao)
  }
  cancelar(){
    this.dialogRef.close();
  }
}
