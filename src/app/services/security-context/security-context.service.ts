import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityContextService {

  constructor() { }

  public GetCurrentTenant(){

    return 'tests'
  }
}
