import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {};

  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {

  }

  login(creds) {

    console.log('creds', creds);
    if (creds.username === 'lphan' && creds.password === 'abc123') {
      console.log('login success');
      this.router.navigate(['contacts']);
    } else {
      console.log('please check creds');
      this.toastService.showToast('danger', 2000, 'please check creds');
    }


  }

}
