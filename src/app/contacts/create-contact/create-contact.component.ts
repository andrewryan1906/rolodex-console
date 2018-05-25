import {Component, OnInit} from '@angular/core';
import {ContactsService} from '@rhythmsoftware/rolodex-angular-sdk/api/contacts.service';
import {CertificationsService} from '../../services/certifications/certifications.service';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import clean from 'lodash-clean';
import * as nameParser from 'parse-full-name';
import {Contact} from '@rhythmsoftware/rolodex-angular-sdk/model/contact';
import * as  googlePhoneNumberLib from 'google-libphonenumber';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {GooglePlacesService} from '../../services/google-places/google-places.service';


// This method checks to make sure you don't have two phone numbers with the same type
function validatePhoneNumbers(c: AbstractControl): { [key: string]: boolean } | null {

  // console.log('validating...' + JSON.stringify( c.value ));

  const entriesThatHaveBeenProcessed = {};
  for (const phoneAndTypeEntry of c.value) {
    if (!phoneAndTypeEntry.phone_number || phoneAndTypeEntry.phone_number.trim() === '')
      continue;   // don't bother if no phone


    if (entriesThatHaveBeenProcessed[phoneAndTypeEntry.phone_number_type])
      return {'duplicate_phone_number_types': true};

    entriesThatHaveBeenProcessed[phoneAndTypeEntry.phone_number_type] = true;
  }
}

function validateAddresses(c: AbstractControl): { [key: string]: boolean } | null {

  // console.log('validating...' + JSON.stringify( c.value ));

  const entriesThatHaveBeenProcessed = {};
  for (const addressAndTypeEntry of c.value) {

    if (entriesThatHaveBeenProcessed[addressAndTypeEntry.address_type])
      return {'duplicate_address_types': true};

    entriesThatHaveBeenProcessed[addressAndTypeEntry.address_type] = true;
  }
}


@Component({
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {


  constructor(private _contactsService: ContactsService, private _certificationsService: CertificationsService,
              private fb: FormBuilder, private _googlePlacesService: GooglePlacesService,
              private router: Router, private toastr: ToastrService) {
  }

  MAX_ADDRESS_TYPES = 3;
  MAX_PHONE_NUMBER_TYPES = 4;

  contact: Contact = {};
  contactForm: FormGroup;
  isSaving: boolean;    // supports the Ladda button
  // designations: Array<Select2OptionData> = [];

  // the name and email panels
  showAdditionalNameOptions = false;
  showAdditionalEmails = false;
  showFullAddress = [false];

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


      title: '',
      contact_role_ids: '',
      phone_numbers: this.fb.array([this.buildPhoneNumberGroup()], validatePhoneNumbers),
      addresses: this.fb.array([this.buildAddressGroup()], validateAddresses),
      certifications: '',

      preferred_phone_number: '',
      preferred_address: '',
      gender: '',
      date_of_birth: '',
      email_address: ['', Validators.email],
      email_address2: ['', Validators.email],
      email_address3: ['', Validators.email],
      notes: ''
    });

    // hook up the name parser
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

  get phone_numbers(): FormArray {
    return <FormArray> this.contactForm.get('phone_numbers');
  }

  buildPhoneNumberGroup() {

    return this.fb.group({

      phone_number: '',
      phone_number_type: 'mobile'
    });
  }

  addPhoneNumber() {
    if (this.phone_numbers.length >= this.MAX_PHONE_NUMBER_TYPES) {
      alert('No more phone number types are available.');
      return;
    }
    this.phone_numbers.push(this.buildPhoneNumberGroup());
  }

  formatPhoneNumber(index: number) {

    const phone = this.phone_numbers.controls[index].get('phone_number').value;
    // console.log(index);
    // console.log(phone);
    const PNF = googlePhoneNumberLib.PhoneNumberFormat;


    const phoneUtil = googlePhoneNumberLib.PhoneNumberUtil.getInstance();

    const number = phoneUtil.parseAndKeepRawInput(phone, 'US');


    const typeOfFormat = phoneUtil.getRegionCodeForNumber(number) === 'US' ? PNF.NATIONAL : PNF.INTERNATIONAL;
    const formattedPhone = phoneUtil.format(number, typeOfFormat);

    this.phone_numbers.controls[index].patchValue({phone_number: formattedPhone});


  }

  initControls(): void {
    //
    //  this._certificationsService.GetAllCertifications().subscribe((certifications) => this.designations = certifications.map(cert => ({
    //   id: cert.post_nominal,
    //   text: cert.post_nominal
    // })));

  }

  shouldShowFormErrorFor(field: string) {
    return this.contactForm.controls[field].errors && this.contactForm.controls[field].touched && this.contactForm.controls[field].dirty;
  }

  shouldShowFormErrorForControl(field: AbstractControl) {
    return field.errors; // && field.touched;
  }


  extractContactFromForm(): Contact {
    const contactToSave = this.contactForm.value;

    // now, let's get the phone numbers
    this.extractPhoneNumbersFromForm(contactToSave);
    // get rid of the phone numbers property
    delete contactToSave.phone_numbers;


    console.log(JSON.stringify(contactToSave));

    return clean(contactToSave);
  }

  private extractPhoneNumbersFromForm(contactToSave) {

    // let's iterate and get the phone numbers
    const phoneNumbers = this.phone_numbers.controls;
    if (phoneNumbers && phoneNumbers.length > 0) {
      const processedPhoneNumbers = {};
      for (const phoneNumber of phoneNumbers) {

        // is this a duplicate?
        const type = phoneNumber.value.phone_number_type;
        if (processedPhoneNumbers[type]) {
          // validation error
          alert('Duplicate phone number types specified!');
          return;
        }

        processedPhoneNumbers[type] = true;
        switch (type) {
          case 'home':
            contactToSave.home_phone_number = phoneNumber.value.phone_number;
            break;

          case 'work':
            contactToSave.work_phone_number = phoneNumber.value.phone_number;
            break;

          case 'mobile':
            contactToSave.mobile_phone_number = phoneNumber.value.phone_number;
            break;

          case 'alternate':
            contactToSave.alt_phone_number = phoneNumber.value.phone_number;
            break;

          default:
            throw new Error('unknown phone number type ' + phoneNumber.value.phone_number_type);
        }

      }


    }
  }


  // *********** Address Management ***************************
  //


  get addresses(): FormArray {
    return <FormArray> this.contactForm.get('addresses');
  }

  buildAddressGroup() {

    return this.fb.group({

      address_lookup: '',
      address_type: 'Home',
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: ''
    });
  }

  addAddress() {
    if (this.addresses.length >= this.MAX_ADDRESS_TYPES) {
      alert('No more address types are available.');
      return;
    }

    this.showFullAddress.push(false);
    this.hasAddressBeenPlaced.push(false);
    this.addresses.push(this.buildAddressGroup());
  }


  hasAddressBeenPlaced: boolean[] = [false];

  handleAddressChange(address: Address, index: number) {

    console.log(JSON.stringify(address));
    let addr = this._googlePlacesService.parseGooglePlacesAddress(address);

    console.log('Placed Addr: ' + JSON.stringify(addr));

    this.addresses.controls[index].patchValue({
      line1: addr.line1,
      line2: addr.line2,
      city: addr.city,
      state: addr.state,
      postal_code: addr.postal_code,
      country: addr.country,
      address_lookup: 'Please edit the address below'

    });
    this.showFullAddress[index] = true;
    this.hasAddressBeenPlaced[index] = true;
    this.addresses.controls[index].get('address_lookup').disable();


  }

// saves the contact record via the REST API
  saveChanges(): void {

    this.toastr.clear();
    this.isSaving = true;

    const contactToSave = this.extractContactFromForm();

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
