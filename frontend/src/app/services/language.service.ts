import { Injectable } from '@angular/core';
import { PoI18nService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public literals: any = {};

  constructor(private i18Service: PoI18nService) {
    this.i18Service.getLiterals().subscribe((literals) => {
      this.literals = literals;
    });
  }

  getLiterals() {
    return this.literals;
  }

}
