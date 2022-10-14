import { ChangeCaseDirective } from './../../directives/change-case.directive';

import { Pessoa } from './../../model/pessoa';
import { IBusinessContract } from '../../services/businessLayer/Ibusiness-Manager';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { BusinessManagerService } from '../../services/businessLayer/business-Manager.service';

declare var $: any;



@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent implements OnInit {

  pessoasList!: Array<Pessoa>;

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    order: [[0, "desc"]],
    paging: true,
    pageLength: 5
  };

  pipeObs!: Observable<Array<Pessoa>>;

  constructor(private businessManager: BusinessManagerService) { }

  ngOnInit(): void {
    this.updatePessoasList();
    this.pipeObs = this.businessManager.getPessoasList();
  }

  updatePessoasList() {
    this.businessManager.getPessoasList().subscribe(elem => this.pessoasList = elem);
  }

  deletePessoa() {
    let cod: number = $("#deleteCod")[0].value;
    this.businessManager.deletePessoa(cod).subscribe(
      elem => {
        alert("The user was deleted"); this.updatePessoasList();
      },
      error => console.log("ERRO", error));

  }

  throwError() {
    try {
      throw Error("ERRO!!!!");
    } catch (error) {
      console.log("ERRO->", error)
    } finally {
      console.log("FINALLY")
    }
    console.log("DEPOIS");
  }


}
