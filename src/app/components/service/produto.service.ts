import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  baseUrl: String = environment.baseUrl;

 
  constructor(private http: HttpClient) {}

  findByid(id: any): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${id}`;
    return this.http.get<any>(url);

  }

  fingAllGaleria(page: number): Observable<Produto[]> {
    const url = `${this.baseUrl}produtos?pagina=${page}&size=4`;
    return this.http.get<any>(url);
  }

  fingAll(page: number): Observable<Produto[]> {
    const url = `${this.baseUrl}produtos?pagina=${page}`;
    return this.http.get<any>(url);
  }

  create(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos`
    return this.http.post<Produto>(url, produto)
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }
  
  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/produtos/${id}`
    return this.http.delete<void>(url)
  }
}
