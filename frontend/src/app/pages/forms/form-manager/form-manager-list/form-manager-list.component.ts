import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoI18nService, PoPageAction, PoPageFilter, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { FormsService } from 'src/app/services/forms.service';
import { LanguageService } from 'src/app/services/language.service';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-manager-list',
  templateUrl: './form-manager-list.component.html',
  styleUrls: ['./form-manager-list.component.scss']
})
export class FormManagerListComponent {

  actions!: Array<PoPageAction>
  tableDataActions!: Array<PoTableAction>
  tableDataColumns!: Array<PoTableColumn>
  literals: any;
  formStructure: any;
  breadcrumb!: PoBreadcrumb
  deleteService: string = `${environment.baseUrl}/forms/form-manager`;
  tableData: Array<object> = [];
  filterSettings!: PoPageFilter

  constructor(
    private router: Router,
    private rest: RestService,
    private language: LanguageService,
    private formService: FormsService,
  ) {
    this.literals = this.language.getLiterals();
    this.initializeFields()
    this.getStructure();
    this.getData();
  }

  getStructure() {
    this.rest.get('/forms/form-manager/structure/12').subscribe((res: any) => {
      this.formStructure = res;
      this.formService.setStructure(res);
    }
    );
  }

  getData() {
    this.rest.get('/forms/form-manager/12').subscribe((res: any) => {
      this.tableData = res;
    }
    );
  }

  edit(item: any) {
    this.router.navigate([`/form-manager/edit/${item.id}`]);
  }

  initializeFields() {
    this.breadcrumb = {
      items: [
        { label: 'Home', action: () => this.router.navigate(['/']) },
        { label: 'Form Manager' }
      ]
    };
    this.deleteService = `${environment.baseUrl}/forms/form-manager`;
    this.tableData = [];
    this.actions = [
      { label: 'New', url: '/form-manager/new' },
      { label: 'Refresh', action: this.getData.bind(this) },
    ];
    this.tableDataActions = [
      {
        label: 'Edit',
        action: this.edit.bind(this),
      }
    ]
    this.tableDataColumns = [
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
  }
}
