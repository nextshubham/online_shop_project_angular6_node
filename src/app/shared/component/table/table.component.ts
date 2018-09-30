import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  headers;
  @Input()
  keys;
  @Input()
  data;
  @Output()
  edit = new EventEmitter();
  @Output()
  delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  fnEdit(rowData) {
    this.edit.emit(rowData);
  }

  fnDelete(rowData) {
    this.delete.emit(rowData);
  }
}
