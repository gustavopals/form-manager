import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  formStructure: any = {};

  constructor() { }

  public setStructure(structure: any) {
    this.formStructure = structure;
  }

  public getStructure() {
    return this.formStructure;
  }
}
