import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../services/sharedata.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msg: string;
  bg: string;
  isShow = false;
  constructor(shared: SharedataService) {
    shared.fnSetMessage(data => {
      this.msg = data.msg;
      this.bg = data.color;
      this.isShow = true;
    });
  }

  ngOnInit() {}
  fnClose() {
    this.isShow = false;
  }
}
