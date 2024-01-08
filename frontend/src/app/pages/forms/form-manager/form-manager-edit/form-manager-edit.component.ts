import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService } from '@po-ui/ng-components';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-form-manager-edit',
  templateUrl: './form-manager-edit.component.html',
  styleUrls: ['./form-manager-edit.component.scss']
})
export class FormManagerEditComponent {
  id!: string | null;
  breadcrumb!: PoBreadcrumb
  formStructure: any;
  formData: any = {};

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private rest: RestService,
    private poNotification: PoNotificationService,
    private utils: UtilsService,
    private formsService: FormsService
  ) { }

  ngOnInit() {
    this.initializeFields();
    this.getStructure()
    if (this.id) this.getData()
  }

  getStructure() {
    this.formStructure = this.formsService.getStructure()
    console.log(this.formStructure);
  }


  getData() {

  }

  save() {
    const params = {
      formStructure: this.formStructure,
      formData: this.formData
    }

    this.rest.post('/forms/form-manager', params).subscribe({
      next: (res) => {
        this.poNotification.success('Saved successfully!');
        this.router.navigate(['/form-manager']);
      },
      error: (err) => console.error(err),
    });
  }

  cancel() {
    this.router.navigate(['/form-manager']);
  }

  // params

  initializeFields() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.breadcrumb = {
      items: [
        { label: 'Home', action: () => this.router.navigate(['/']) },
        { label: 'Form Manager', action: () => this.router.navigate(['/form-manager']) },
        { label: 'Edit' }
      ]
    }

  }
}
