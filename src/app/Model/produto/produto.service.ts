import { Produto } from './produto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.urlApi;
const RECURSO = API+'/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  constructor(
    private httpClient: HttpClient
  ){}

  //selectAll(){
   // return this.httpClient.get<Produto[]>(RECURSO);
   selectAll(pagina: number, limiteDeLinhas: number){
    return this.httpClient.get<{ items: Produto[], count: number }>(`${RECURSO}?page=${pagina+1}&limit=${limiteDeLinhas}`);
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

 
//ProdutoPage(page: any, size: any): Observable<any> {
//return this.httpClient.get(`http://localhost:4200/produto?page=${page}&size${size}`).map((res: { json: () => any; }) => res.json());
}

  //}

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


