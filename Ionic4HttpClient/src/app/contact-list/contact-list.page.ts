import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
 
  contactsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.contactsData = [];
  }
 
  ngOnInit() {
    this.getAllContacts();
  }
 
  getAllContacts() {
    //Get saved list of contacts
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.contactsData = response;
    })
  }
 
 

 
}
 