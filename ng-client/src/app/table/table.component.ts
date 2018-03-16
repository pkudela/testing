import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  title = 'app';
  view: boolean;
  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  text: string = "Vestibulum erat nulla";

  constructor() { }

  ngOnInit() {
  }
  
  toggle(){
    this.view = !this.view;
    this.text += this.text;
  }
}
