import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoPageAction, PoPageFilter, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-form-designer-list',
  templateUrl: './form-designer-list.component.html',
  styleUrls: ['./form-designer-list.component.scss']
})
export class FormDesignerListComponent {

  constructor(
    private router: Router
  ) { }

  public readonly actions: Array<PoPageAction> = [
    { label: 'New', url: '/form-designer/new' },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: () => this.router.navigate(['/']) },
      { label: 'Form Designer'}
    ]
  };

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

  tableDataColumns: Array<PoTableColumn> = [
    {
      property: 'id',
      label: 'ID',
    },
    {
      property: 'name',
      label: 'Name',
    }
  ];
  tableData: Array<object> = [
    {
      id: 1,
      name: 'Form 1',
    },
    {
      id: 2,
      name: 'Form 1',
    },
    {
      id: 3,
      name: 'Form 1',
    },
  ];

}
