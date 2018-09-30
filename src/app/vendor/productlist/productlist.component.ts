import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  h: any = ['USER NAME', 'RUNS'];
  d: any = [
    {
      name: 'shubham1',
      runs: 20000
    },
    {
      name: 'vinay2',
      runs: 15000
    }
  ];
  k: any = ['name', 'runs'];

  constructor() {}

  fnEdit1(e) {
    alert(e.name);
  }
  fnDelete1(e) {
    alert(e.name);
  }

  ngOnInit() {
  }

}
