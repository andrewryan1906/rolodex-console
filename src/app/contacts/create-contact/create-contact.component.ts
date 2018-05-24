import {Component, OnInit} from '@angular/core';
import {ContactsService} from '@rhythmsoftware/rolodex-angular-sdk/api/contacts.service';
import {CertificationsService} from '../../services/certifications/certifications.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import clean from 'lodash-clean';
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

  ngOnInit() {

    this.initFormGroup();

    this.initControls();
  }


  initFormGroup(): void {

    this.contactForm = this.fb.group({
      prefix: ['Dr.'],
      first_name: ['Jason'],
      middle_name: ['middle'],
      last_name: ['Bailey', Validators.minLength(2)],
      suffix: ['Jr.'],
      nickname: 'nickname',
      organization_id: ['org id'],
      work_phone_number: ['workphone'],
      title: ['title'],
      contact_role_ids: [['Employee', 'Owner']],
      home_phone_number: ['home'],
      // certifications: [['MBA', 'JD']],
      alt_phone_number: ['altphn'],
      mobile_phone_number: ['mobile'],
      preferred_phone_number: [''],
      preferred_address: [''],
      gender: ['female'],
      date_of_birth: [32323423],
      email_address: [{value: 'jbailey@msn.com', disabled: false}, Validators.minLength(2)]
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
