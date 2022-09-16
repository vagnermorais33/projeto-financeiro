import { Produto } from './produto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;
const RECURSO = API+'/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  constructor(
    private httpClient: HttpClient
  ){}

  selectAll(){
    return this.httpClient.get<Produto[]>(RECURSO);
  }
  selectById(id: number){
    return this.httpClient.get<Produto[]>(RECURSO+`/${id}`);
  }

  insert(obj: Produto){
    return this.httpClient.post<Produto>(RECURSO, obj);
  }

  update(obj: Produto){
    return this.httpClient.put<Produto>(RECURSO+`/${obj.id}`, obj);
  }

  delete(id: number){
    return this.httpClient.delete<Produto>(RECURSO+`/${id}`);
  }
  // selectAll(){
  //   return [
  //     { id:1, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:2, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:3, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:4, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:5, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:6, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //   ] as Transacao[]
  // }

}
