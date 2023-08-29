import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {
  private localidadesUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades'; // Substitua pelo URL da sua API
  private paisesURL = 'https://restcountries.com/v3.1/all'; // Substitua pelo URL da sua API

  constructor(private http: HttpClient) { }

  getEstados(): Observable<string[]> {
    return this.http.get<string[]>(`${this.localidadesUrl}/estados`);
  }

  getCidadesPorEstado(numeroEstado: any): Observable<string[]> {
    return this.http.get<string[]>(`${this.localidadesUrl}/estados/${numeroEstado}/distritos`);
  }

  getPaises(): Observable<string[]> {
    return this.http.get<string[]>(`${this.paisesURL}`);
  }
}
