import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { UsersDataService } from 'src/app/services/usersData.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  users: any;
  user: any;
  queryParams: any;

  constructor(private routeElem: ActivatedRoute, private userData: UsersDataService) {
    this.users = this.userData.getUsers();
  }

  ngOnInit(): void {
    this.routeElem.params.subscribe(
      params => { this.user = this.users.filter((userElem: any) => userElem.id == params["id"])[0]; }
    );

    this.routeElem.queryParams.subscribe(
      queryElem => { this.queryParams = queryElem }
    );
    console.log("QueryParams->", this.queryParams);
  }

}
