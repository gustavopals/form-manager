import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoI18nService, PoPageAction, PoPageFilter, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { LanguageService } from 'src/app/services/language.service';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-manager-list',
  templateUrl: './form-manager-list.component.html',
  styleUrls: ['./form-manager-list.component.scss']
})
export class FormManagerListComponent {

  literals: any = {};
  formStructure: any = {};

  constructor(
    private router: Router,
    private rest: RestService,
    private language: LanguageService
  ) {
    this.literals = this.language.getLiterals();
    this.getData();
    this.getStructure();
  }


  public readonly actions: Array<PoPageAction> = [
    { label: 'New', url: '/form-manager/new' },
    { label: 'Refresh', action: this.getData.bind(this) },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: () => this.router.navigate(['/']) },
      { label: 'Form Manager' }
    ]
  };

  tableDataColumns: Array<PoTableColumn> = [
    {
      property: 'id',
      label: 'ID',
      visible: false,
    },
    {
      property: 'tableName',
      label: 'Table Name',
    },
    {
      property: 'code',
      label: 'Code',
    },
    {
      property: 'captionBr',
      label: 'Caption BR',
    }
  ];
  tableDataActions: Array<PoTableAction> = [
    {
      label: 'Edit',
      action: this.edit.bind(this),
    }
  ]
  deleteService: string = `${environment.baseUrl}/forms/form-manager`;
  tableData: Array<object> = [];


  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  filterAction(labelFilter: string | Array<string>) {
    // const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    // this.populateDisclaimers(filter);
    // this.filter();
  }

  advancedFilterActionModal() {
    // this.advancedFilterModal.open();
  }

  getData() {
    this.rest.get('/forms/form-manager/12').subscribe((res: any) => {
      this.tableData = res;
    }
    );
  }

  getStructure() {
    this.rest.get('/forms/form-manager/structure/12').subscribe((res: any) => {
      this.formStructure = res;
    }
    );
  }

  edit(item: any) {
    this.router.navigate([`/form-manager/edit/${item.id}`]);
  }

}
