import { SharedataService } from './../../services/sharedata.service';
import { ServercallService } from './../../services/servercall.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  postData: any = {};
  constructor(
    public router: Router,
    public shared: SharedataService,
    public serverCall: ServercallService
  ) {}

  ngOnInit() {}

  fnLogin() {
    this.serverCall.post('users/login', { query: this.postData }).subscribe(
      res => {
        if (res) {
          debugger;
          this.router.navigateByUrl(res[0].role);
        } else {
          let msgObj = {
            msg: 'Uid or pwd is wrong',
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

  fnRegisterNav() {
    this.router.navigate(['/register']);
  } //Register Close
}
