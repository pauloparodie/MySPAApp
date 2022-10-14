import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private users: any =
    [
      { id: 1, name: "Paulo" },
      { id: 2, name: "Pedro" },
      { id: 3, name: "João" },
      { id: 4, name: "Maria" }
    ]

  constructor() { }

  getUsers(): Array<{ id: number; name: string; }> {
    return this.users;
  }
}
