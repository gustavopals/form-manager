import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { RestService } from 'src/app/services/rest.service';
import { UtilsService } from 'src/app/services/utils.service';
import { randomInt } from "crypto";

@Component({
  selector: 'app-form-designer-edit',
  templateUrl: './form-designer-edit.component.html',
  styleUrls: ['./form-designer-edit.component.scss']
})
export class FormDesignerEditComponent {
  @ViewChild(PoModalComponent, { static: true }) modalItems!: PoModalComponent;
  myForm!: FormGroup;
  myFormItems!: FormGroup
  myFormItemsIni!: any
  id!: string | null;
  breadcrumb!: PoBreadcrumb
  modalItemsData!: any[]
  modalItemsColumns!: Array<PoTableColumn>
  modalItemsActions!: Array<PoTableAction>
  saveFormFieldAction!: PoModalAction
  myFormItemsComponentOptions!: PoSelectOption[]

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private rest: RestService,
    private poNotification: PoNotificationService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.initializeFields();
    if (this.id) this.getData()
  }

  getData() {
    this.rest.get(`/forms/form-designer/${this.id}`).subscribe({
      next: (res) => {
        this.myForm.patchValue(res);
        this.modalItemsData = res.FormField;
      },
      error: (err) => console.error(err),
    });
  }

  save() {
    if (this.myForm.valid) {
      const data = this.myForm.value;
      data.FormField = this.modalItemsData;
      if (this.id) data.id = parseInt(this.id);

      this.rest.post('/forms/form-designer', data).subscribe({
        next: (res) => {
          this.poNotification.success('Saved successfully!');
          this.router.navigate(['/form-designer']);
        },
        error: (err) => {
          this.poNotification.error('Error saving: ' + err.error || 'Unknown error');
          console.log(err);
        }
      }
      );
    }
  }

  cancel() {
    this.router.navigate(['/form-designer']);
  }

  deleteItems(item: any) {
    this.modalItemsData = item
  }

  // form field

  addFormField(item?: any) {
    if (item) this.myFormItems.patchValue(item);
    this.modalItems.open();
  }

  saveFormField() {
    if (this.myFormItems.valid) {
      if (this.myFormItems.value.id) {
        const index = this.modalItemsData.findIndex((item) => item.id === this.myFormItems.value.id);
        this.modalItemsData[index] = this.myFormItems.value;
      } else {
        this.myFormItems.value.id = this.utils.getRandomInt()
        this.modalItemsData.push(this.myFormItems.value);
      }
      this.modalItems.close();
      this.myFormItems.reset(this.myFormItemsIni);
    } else {
      this.utils.formErrorHandler(this.myFormItems);
    }
  }

  // params

  initializeFields() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.myForm = this.formBuilder.group({
      tableName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      captionBr: ['', [Validators.required]],
      captionEn: ['', [Validators.required]],
      captionEs: ['', [Validators.required]],
    });
    this.myFormItems = this.formBuilder.group({
      id: ['', []],
      fieldName: ['', [Validators.required]],
      captionBr: ['', [Validators.required]],
      captionEn: ['', [Validators.required]],
      captionEs: ['', [Validators.required]],
      component: ['text', [Validators.required]],
      grid: ['', [Validators.required]],
      order: ['', [Validators.required]],
      isNewLine: [false, [Validators.required]],
      required: [true, [Validators.required]],
      iniValue: ['', []],
      help: ['', []],
    });
    this.myFormItemsIni = this.myFormItems.value;
    this.breadcrumb = {
      items: [
        { label: 'Home', action: () => this.router.navigate(['/']) },
        { label: 'Form Designer', action: () => this.router.navigate(['/form-designer']) },
        { label: 'Edit' }
      ]
    }
    this.modalItemsColumns = [
      {
        property: 'fieldName',
        label: 'Field Name',
      },
      {
        property: 'captionEn',
        label: 'Caption',
      },
      {
        property: 'component',
        label: 'Component',
      },
      {
        property: 'grid',
        label: 'Grid',
      },
      {
        property: 'order',
        label: 'Order',
      }
    ]
    this.modalItemsActions = [
      {
        label: 'Edit',
        action: this.addFormField.bind(this)
      }
    ]
    this.modalItemsData = []
    this.saveFormFieldAction = {
      label: 'Save',
      action: this.saveFormField.bind(this)
    }
    this.myFormItemsComponentOptions = [
      {
        label: 'Text',
        value: 'text'
      }
    ]
  }
}
