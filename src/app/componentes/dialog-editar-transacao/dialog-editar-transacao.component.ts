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

descricaoInput:string ="";  
valorInput: number= 0;
tipoInput: string="";
transacao: any; 
isDisplaying= true;

  constructor(
    public dialogRef: MatDialogRef<DialogEditarTransacaoComponent>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
    this.transacao = this.data.transacao;
    this.isDisplaying = this.data.isDisplaying;
    console.log(this.transacao)
  }

  atualizar(){

  
    let that = this;

    this.transacaoService.update(this.transacao).subscribe(
      {
        next(transacao){
          that.dialogRef.close(transacao);
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

  formToModel(): Transacao{

    let transacaoParaSalvar = {
      descricao: this.transacao.descricao,
      valor: this.transacao.valor,
      tipo: this.transacao.tipo
    } as Transacao;

    return transacaoParaSalvar;

    // let transacaoParaSalvar = {} as Transacao;
    // transacaoParaSalvar.descricao = this.descricaoInput;
    // transacaoParaSalvar.valor = this.valorInput;
    // transacaoParaSalvar.tipo = this.tipoInput;
  }
  cancelar(){
    this.dialogRef.close();
  }
}

/*updatePublished(status): void {
  const data = {
    title: this.currentTutorial.title,
    description: this.currentTutorial.description,
    published: status
  };
  this.tutorialService.update(this.currentTutorial.id, data)
    .subscribe(
      response => {
        this.currentTutorial.published = status;
        console.log(response);
      },
      error => {
        console.log(error);
      });
}
updateTutorial(): void {
  this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
}*/