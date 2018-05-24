import {Injectable} from '@angular/core';
import {AlgoliaService} from '@rhythmsoftware/system-angular-sdk/api/algolia.service';
import {AlgoliaSecureApiKey} from '@rhythmsoftware/system-angular-sdk/model/algoliaSecureApiKey';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AlgoliaKeyManagementService {

  constructor(private _algoliaService: AlgoliaService) {
  }

  GetSecureApiKey(tenantId: string, serviceName: string): Observable<AlgoliaSecureApiKey> {

    // first, let's check local storage
    const localStorageKey = 'algolia_' + tenantId + serviceName;
    const keyAsString = localStorage.getItem(localStorageKey);

    // now, if the key exists, and it's not expired, we're good
    let apiKey: AlgoliaSecureApiKey;

    if (keyAsString) {

      console.log('located Algolia key in cache');
      apiKey = JSON.parse(keyAsString);

      // console.log(`Valid until: ${apiKey.valid_until }`);
      // console.log('Current time: ' + (new Date).getTime());
      // now, is it expired?
      const timeLeft = apiKey.valid_until - (new Date).getTime() / 1000;  // we divide by 1000 because epoch is seconds

      console.log('Time left: ' + timeLeft);

      // ten minutes
      if (timeLeft > (60 * 10)) {
        console.log('using cached key');

        // we're just going to return the simple string which will resolve immediately
        return Observable.of(apiKey);
      }

      console.log('key expired');

    }

    // let's go hit the API
    return this._algoliaService.getSearchApiKey(tenantId, serviceName)
      .map(
        (key) => {
          localStorage.setItem(localStorageKey, JSON.stringify(key));
          return key;
        }
      );


  }
}
