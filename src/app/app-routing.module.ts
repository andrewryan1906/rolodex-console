import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Layout1Component} from './layout/layout-1/layout-1.component';
import {HomeComponent} from './home/home.component';

import {CreateContactComponent} from './contacts/create-contact/create-contact.component';
import {ViewContactComponent} from './contacts/view-contact/view-contact.component';

// *******************************************************************************
// Layouts

// *******************************************************************************
// Pages

// *******************************************************************************
// Routes

const routes: Routes = [

  {
    path: '', component: Layout1Component, pathMatch: 'full', children: [
      {path: '', component: HomeComponent},
    ]
  },

  {
    path: 'contacts', component: Layout1Component, children: [
      {path: 'create', component: CreateContactComponent},
      {path: ':id', component: ViewContactComponent}
    ]
  }


];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
