import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  formStructure: any = null;

  constructor() { }

  public setStructure(structure: any): void {
    this.formStructure = structure;
    localStorage.setItem('formStructure', JSON.stringify(structure));
  }

  public getStructure(): any {
    if (!this.formStructure) {
      const formStructure = localStorage.getItem('formStructure');
      if (formStructure) {
        this.formStructure = JSON.parse(formStructure);
      }
    }

    return this.formStructure;
  }
}
