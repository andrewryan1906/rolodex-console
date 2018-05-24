import {Component, OnInit} from '@angular/core';
import {ContactsService} from '@rhythmsoftware/rolodex-angular-sdk/api/contacts.service';
import {CertificationsService} from '../../services/certifications/certifications.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import clean from 'lodash-clean';
import * as nameParser from 'parse-full-name';

import {Contact} from '@rhythmsoftware/rolodex-angular-sdk/model/contact';


@Component({
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {


  constructor(private _contactsService: ContactsService, private _certificationsService: CertificationsService,
              private fb: FormBuilder,
              private router: Router, private toastr: ToastrService) {
  }

  contact: Contact = {};
  contactForm: FormGroup;
  isSaving: boolean;    // supports the Ladda button
  // designations: Array<Select2OptionData> = [];

  // the name and email panels
  showAdditionalNameOptions = false;
  showAdditionalEmails = false;

  ngOnInit() {

    this.initFormGroup();

    this.initControls();
  }


  initFormGroup(): void {

    this.contactForm = this.fb.group({
      salutation: '',
      name: ['', Validators.required],
      first_name: '',
      middle_name: '',
      last_name: '',
      suffix: '',
      nickname: '',
      organization_id: '',
      job_title: '',
      work_phone_number: '',
      title: '',
      contact_role_ids: '',
      home_phone_number: '',
      certifications: '',
      alt_phone_number: '',
      mobile_phone_number: '',
      preferred_phone_number: '',
      preferred_address: '',
      gender: '',
      date_of_birth: '',
      email_address: '',
      email_address2: '',
      email_address3: '',
      notes: ''
    });

    this.contactForm.get('name').valueChanges.subscribe(name => {

      // we don't want to run this if someone has changed one of the
      // fields

      if (this.contactForm.get('first_name').dirty ||
        this.contactForm.get('middle_name').dirty ||
        this.contactForm.get('last_name').dirty ||
        this.contactForm.get('salutation').dirty ||
        this.contactForm.get('nickname').dirty ||
        this.contactForm.get('suffix').dirty) {
        console.log('form name elements changed, disabling name parsing');
        return;
      }
      const nameparts = nameParser.parseFullName(name);
      // console.log(JSON.stringify(nameparts));

      this.contactForm.patchValue({
        first_name: nameparts.first,
        middle_name: nameparts.middle,
        last_name: nameparts.last,
        salutation: nameparts.title,
        nickname: nameparts.nick,
        suffix: nameparts.suffix
      });

      if (nameparts.error && nameparts.error.length > 0) {
        console.error('could not parse name: ' + JSON.stringify(nameparts.error));
      }
    });
  }

  initControls(): void {
    //
    //  this._certificationsService.GetAllCertifications().subscribe((certifications) => this.designations = certifications.map(cert => ({
    //   id: cert.post_nominal,
    //   text: cert.post_nominal
    // })));

  }


  // saves the contact record via the REST API
  saveChanges(): void {

    this.toastr.clear();
    this.isSaving = true;

    const contactToSave = clean(this.contactForm.value);


    // now, let's save the contact via the REST API
    // we'll output an error if unsuccessful via toaster
    this._contactsService.createContact('tests', contactToSave)

      .subscribe((contact) => this.router.navigate(['/contacts', contact.id]),
        (err) => {

          const errorMessage = (err.error && err.error.errorMessage) ? err.error.errorMessage : err.message;

          this.toastr.error(errorMessage, 'We weren\'t able to save the contact...', {
            timeOut: 0,
            closeButton: true,
            positionClass: 'toast-top-full-width'
          });
          this.isSaving = false;
        });

  }
}
