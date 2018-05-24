import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '@rhythmsoftware/rolodex-angular-sdk/api/contacts.service';
import {Contact} from '@rhythmsoftware/rolodex-angular-sdk/model/contact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {

  }

  contact: Contact;

  ngOnInit() {

    this.contactsService.getContact('tests', this.route.snapshot.params['id'])
      .subscribe(contact => this.contact = contact);

  }

}
