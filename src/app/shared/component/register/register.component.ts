import { Component, OnInit } from '@angular/core';
import { ServercallService } from './../../services/servercall.service';
import { SharedataService } from './../../services/sharedata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  postData: any = {};
  constructor(
    public serverCall: ServercallService,
    public shared: SharedataService
  ) {}

  ngOnInit() {}
  fnRegister() {
    this.postData.role = 'customer';
    console.log(this.postData);
    debugger;

    this.serverCall.post('users/register', { query: this.postData }).subscribe(
      res => {
        debugger;
        if (res) {
          debugger;
          let msgObj = {
            msg: 'Registered Successfully',
            bg: 'green'
          };
          this.shared.fnSetMessage(msgObj);
        } else {
          let msgObj = {
            msg: 'Something Went Wrong',
            bg: 'red'
          };
          this.shared.fnSetMessage(msgObj);
        }
      },
      error => {
        let msgObj = {
          msg: 'something went wrong',
          bg: 'red'
        };
        this.shared.fnSetMessage(msgObj);
      }
    );
  }
}
