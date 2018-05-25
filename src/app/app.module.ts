import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {LayoutModule} from './layout/layout.module';
import {HomeComponent} from './home/home.component';
import {ApiModule as RolodexApi} from '@rhythmsoftware/rolodex-angular-sdk/api.module';
import {ApiModule as SystemApi} from '@rhythmsoftware/system-angular-sdk/api.module';
import {CreateContactComponent} from './contacts/create-contact/create-contact.component';
import {ToastrModule} from 'ngx-toastr';

import {LaddaModule} from 'angular2-ladda';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ViewContactComponent} from './contacts/view-contact/view-contact.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';

// *******************************************************************************
// NgBootstrap


// *******************************************************************************
// App


// *******************************************************************************
// Pages


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    CreateContactComponent,
    ViewContactComponent
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    LaddaModule,
    RolodexApi,
    SystemApi,

    // App
    AppRoutingModule,
    LayoutModule
  ],

  providers: [
    Title,
    AppService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
