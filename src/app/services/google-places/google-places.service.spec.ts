import {inject, TestBed} from '@angular/core/testing';

import {GooglePlacesService} from './google-places.service';
import {Address as GooglePlacesAddress} from 'ngx-google-places-autocomplete/objects/address';
import {Address as RhythmAddress} from '@rhythmsoftware/rolodex-angular-sdk/model/address';


// This service is responsible for takin

const testAddress = {
  'address_components': [{
    'long_name': '357',
    'short_name': '357',
    'types': ['street_number']
  }, {
    'long_name': 'East 5th Street',
    'short_name': 'E 5th St',
    'types': ['route']
  }, {
    'long_name': 'South Side',
    'short_name': 'South Side',
    'types': ['neighborhood', 'political']
  }, {
    'long_name': 'Mount Vernon',
    'short_name': 'Mt Vernon',
    'types': ['locality', 'political']
  }, {
    'long_name': 'Westchester County',
    'short_name': 'Westchester County',
    'types': ['administrative_area_level_2', 'political']
  }, {
    'long_name': 'New York',
    'short_name': 'NY',
    'types': ['administrative_area_level_1', 'political']
  }, {
    'long_name': 'United States',
    'short_name': 'US',
    'types': ['country', 'political']
  }, {
    'long_name': '10553',
    'short_name': '10553',
    'types': ['postal_code']
  }, {
    'long_name': '1906',
    'short_name': '1906',
    'types': ['postal_code_suffix']
  }],
  'adr_address': '<span class="street-address">357 E 5th St</span>, <span class="locality">Mt Vernon</span>, <span class="region">NY</span> <span class="postal-code">10553-1906</span>, <span class="country-name">USA</span>',
  'formatted_address': '357 E 5th St, Mt Vernon, NY 10553, USA',
  'geometry': {
    'location': {
      'lat': 40.9042037,
      'lng': -73.82400940000002
    },
    'viewport': {
      'south': 40.9027510197085,
      'west': -73.8253256302915,
      'north': 40.9054489802915,
      'east': -73.82262766970848
    }
  },
  'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png',
  'id': 'a5b98455e020e979e1097532759d089e86efa227',
  'name': '357 E 5th St',
  'place_id': 'ChIJf9YVCTyNwokRPKdJ2ft8n-U',
  'types': ['premise'],
  'url': 'https://maps.google.com/?q=357+E+5th+St,+Mt+Vernon,+NY+10553,+USA&ftid=0x89c28d3c0915d67f:0xe59f7cfbd949a73c',
  'utc_offset': -240,
  'vicinity': 'Mount Vernon',
  'html_attributions': []
};

describe('GooglePlacesService', () => {

  let parsedAddress: RhythmAddress;
  let service: GooglePlacesService;
  beforeEach(() => {
    service = new GooglePlacesService();
    parsedAddress = service.parseGooglePlacesAddress( testAddress);
  });

  it('should be created', inject([GooglePlacesService], (theService: GooglePlacesService) => {
    expect(theService).toBeTruthy();
  }));

  it('should parse the first line of the address', function () {


    expect(parsedAddress.line1).toBe('357 East 5th St');
  });


});
