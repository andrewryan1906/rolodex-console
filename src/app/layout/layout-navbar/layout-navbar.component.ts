import {Component, Input} from '@angular/core';
import {AppService} from '../../app.service';
import {LayoutService} from '../../layout/layout.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {AlgoliaSecureApiKey} from '@rhythmsoftware/system-angular-sdk/model/algoliaSecureApiKey';
import {AlgoliaService} from '@rhythmsoftware/system-angular-sdk/api/algolia.service';
import * as algoliasearch from 'algoliasearch';
import {NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',

  styleUrls: ['./layout-navbar.component.scss'],

})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;
  templateModel: any;
  algoliaKey: AlgoliaSecureApiKey;
  alogliaClient: algoliasearch.Client;
  algoliaIndex: algoliasearch.Index;

  @Input() sidenavToggle: boolean = true;

  constructor(private appService: AppService, private layoutService: LayoutService, private _algoliaService: AlgoliaService,
              private _router: Router) {
    this.isRTL = appService.isRTL;

    const keyAsString = localStorage.getItem('algoliaKey');

    if (!keyAsString) {
      _algoliaService.getSearchApiKey('tests', 'rolodex-contacts')
        .subscribe(
          (key) => {
            this.algoliaKey = key;
            localStorage.setItem('algoliaKey', JSON.stringify(key));
          }
        );
    } else {
      this.algoliaKey = JSON.parse(keyAsString);
    }

    this.alogliaClient = algoliasearch(this.algoliaKey.application_id, this.algoliaKey.api_key);
    this.algoliaIndex = this.alogliaClient.initIndex(this.algoliaKey.index_name);


  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }


  searchResultSelected(event: NgbTypeaheadSelectItemEvent) {


    this._router.navigate(['/contacts', event.item.id]);

  }

  // Search
  searchWithTemplate = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .switchMap(term => this.algoliaIndex.search({query: term}).then((response) => response.hits));

  formatter = (x: { name: string }) => x.name;
}
