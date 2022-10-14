import { Pessoa } from '../../model/pessoa';
import { IBusinessContract } from './Ibusiness-Manager';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BusinessManagerService implements IBusinessContract {

  private _apiUrl: string = 'http://www.myapiapp.com/Api';

  constructor(private http: HttpClient) { }

  getPessoasList(): Observable<Array<Pessoa>> {
    return this.http.get<Array<Pessoa>>(`${this._apiUrl}/Pessoas`);

  }

  getPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this._apiUrl}/Pessoas`);
  }

  deletePessoa(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${this._apiUrl}/Pessoa/Delete/${id}`)
  }

}
