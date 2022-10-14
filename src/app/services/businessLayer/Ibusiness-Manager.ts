import { Observable } from 'rxjs';
import { Pessoa } from "src/app/model/pessoa";

export interface IBusinessContract {
    getPessoasList(): Observable<Array<Pessoa>>;

    getPessoa(id: number): Observable<Pessoa>

    deletePessoa(id: number): Observable<Pessoa>
}
