import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/Model/produto/produto.service';

@Component({
  selector: 'app-dialog-visualizar-produto',
  templateUrl: './dialog-visualizar-produto.component.html',
  styleUrls: ['./dialog-visualizar-produto.component.css']
})
export class DialogVisualizarProdutoComponent implements OnInit {


  produto:any;

  constructor(
    public dialogRef: MatDialogRef<DialogVisualizarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.produto = this.data.produto;
}

//botao cancelar Dialog
cancelar(){
  this.dialogRef.close();
}

}