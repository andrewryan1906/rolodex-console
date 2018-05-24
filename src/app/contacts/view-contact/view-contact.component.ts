import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '@rhythmsoftware/rolodex-angular-sdk/api/contacts.service';
import {Contact} from '@rhythmsoftware/rolodex-angular-sdk/model/contact';
import 'rxjs/add/operator/mergeMap';

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

    this.route.params
      .mergeMap(params =>
        this.contactsService.getContact('tests', params['id']))
      .subscribe(contact => this.contact = contact);

  }

}
