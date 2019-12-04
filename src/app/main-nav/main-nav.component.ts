import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private toastSvcs: ToastService, private router: Router) { }

  ngOnInit() {
  }

  show() {
    this.toastSvcs.showToast('success', 2000, 'This application was created by Lucas Phan (c).');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
