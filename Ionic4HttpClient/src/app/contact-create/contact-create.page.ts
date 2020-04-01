import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.page.html',
  styleUrls: ['./contact-create.page.scss'],
})
export class ContactCreatePage implements OnInit {
 
  data: Contact
 
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Contact();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
 
  }
 
}
 