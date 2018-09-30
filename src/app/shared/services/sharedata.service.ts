import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  private msg = new Subject<any>();

  constructor() {}
  fnSetMessage(data) {
    this.msg.next(data);
  }

  fnSubMsgCB(cb) {
    this.msg.subscribe(cb);
  }
}
