import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {
  h: any = ['USER NAME', 'RUNS'];
  d: any = [
    {
      name: 'shubham',
      runs: 20000
    },
    {
      name: 'vinay',
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

  ngOnInit() {}
}
