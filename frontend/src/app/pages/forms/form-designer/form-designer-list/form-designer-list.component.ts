import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoPageAction, PoPageFilter, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-designer-list',
  templateUrl: './form-designer-list.component.html',
  styleUrls: ['./form-designer-list.component.scss']
})
export class FormDesignerListComponent {

  constructor(
    private router: Router,
    private rest: RestService
  ) {
    this.getData();
  }

  public readonly actions: Array<PoPageAction> = [
    { label: 'New', url: '/form-designer/new' },
    { label: 'Refresh', action: this.getData.bind(this) },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: () => this.router.navigate(['/']) },
      { label: 'Form Designer' }
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
  deleteService: string = `${environment.baseUrl}/forms/form-designer`;
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
    this.rest.get('/forms/form-designer').subscribe((res: any) => {
      this.tableData = res;
    }
    );
  }

  edit(item: any) {
    this.router.navigate([`/form-designer/edit/${item.id}`]);
  }
}
