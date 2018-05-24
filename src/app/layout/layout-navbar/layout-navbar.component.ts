import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {LayoutService} from '../../layout/layout.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import * as algoliasearch from 'algoliasearch';
import {NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {AlgoliaKeyManagementService} from '../../services/algolia/algolia-key-management.service';


@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',

  styleUrls: ['./layout-navbar.component.scss'],

})
export class LayoutNavbarComponent implements OnInit {
  isExpanded = false;
  isRTL: boolean;
  templateModel: any;
  isSearchInitialized = false;

  alogliaClient: algoliasearch.Client;
  algoliaIndex: algoliasearch.Index;

  @Input() sidenavToggle: boolean = true;

  constructor(private appService: AppService, private layoutService: LayoutService, private _algoliaKeyService: AlgoliaKeyManagementService,
              private _router: Router) {
    this.isRTL = appService.isRTL;

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

  ngOnInit(): void {


    // let's get the secure key from our service
    this._algoliaKeyService.GetSecureApiKey('tests', 'rolodex-contacts')
      .subscribe(
        (key) => {

          // populate the index
          this.alogliaClient = algoliasearch(key.application_id, key.api_key);
          this.algoliaIndex = this.alogliaClient.initIndex(key.index_name);

          // enable the search
          this.isSearchInitialized = true;
        }
      );


  }
}
