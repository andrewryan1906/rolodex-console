import {Injectable} from '@angular/core';
import {Address as GooglePlacesAddress} from 'ngx-google-places-autocomplete/objects/address';
import {Address as RhythmAddress} from '@rhythmsoftware/rolodex-angular-sdk/model/address';


// This service is responsible for taking a google address and creating
// something that can be returned to the MemberSuite SDK
@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {

  constructor() {
  }

  public parseGooglePlacesAddress(place: GooglePlacesAddress): RhythmAddress {

    if (!place)
      return null;

    const componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'short_name',
      postal_code: 'short_name'
    };

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType: string = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        componentForm[addressType] =  place.address_components[i] [ componentForm[addressType] ];
      }
    }

    for( let key of Object.keys( componentForm))
      if ( componentForm[key].endsWith('_name'))
        componentForm[key] = '';

    // now, let's construct the address
    const addr: RhythmAddress = {};

    addr.line1 = `${componentForm.street_number} ${componentForm.route}`;
    addr.city = componentForm.locality;
    addr.state = componentForm.administrative_area_level_1;
    addr.country = componentForm.country;
    addr.postal_code = componentForm.postal_code;

    return addr;
  }
}
