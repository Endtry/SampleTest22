import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';
import { Contact } from './contact.model';
import { Http } from '@angular/http';
import { LocalStorageService } from '../localStorageService';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myContacts: Array<any> = [];

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {
  }

  async ngOnInit() {
    this.myContacts = await this.loadContact();
  }

  async loadContact() {
    const contacts = await this.http.get('assets/contacts.json').toPromise();
    this.myContacts = contacts.json();
    return contacts.json();
  }

  delete(index: number) {
    this.myContacts.splice(index, 1);
  }

  add() {
    this.myContacts.unshift({
      'id': null,
      'firstName': '',
      'lastName': '',
      'email': '',
      'phone': '',
      'owed': null,
      'editing': false
    });
  }

  finalize() {
    const sum = this.myContacts.reduce((acc, it, i, arr) => {
      acc += it.owed;
      return acc;
    }, 0);
    console.log('sum', sum);
    const data = {
      numOfContacts: this.myContacts.length,
      subTotal: sum,
      interest: sum * .12,
      total: sum * 1.12
    };

    localStorage.setItem('data', JSON.stringify(data));
    return data;

  }


} // end of class

