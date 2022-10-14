import { UsersDataService } from './../../services/usersData.service';
import { Component } from '@angular/core';
import { OnInit as MyInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { useAnimation } from '@angular/animations';
declare var $: any;


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements MyInit {
  users: any;

  constructor(private userData: UsersDataService) { }

  ngOnInit(): void {
    this.users = this.userData.getUsers();
  }

  btnClick() {
    let elem = document.createElement("p");
    elem.innerText = "NOVO P";
    document.getElementsByTagName("body")[0].appendChild(elem);
    document.getElementsByTagName("")

    alert("Clicou User");
    console.log($("#pTextUser"))
    $("#pTextUser").text("Ole");
  }
}
