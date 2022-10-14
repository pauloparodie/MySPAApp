import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @HostListener("click") Clicked() {
    alert("Clicked inside");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
