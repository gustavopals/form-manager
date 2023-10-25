import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService } from '@po-ui/ng-components';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-form-designer-edit',
  templateUrl: './form-designer-edit.component.html',
  styleUrls: ['./form-designer-edit.component.scss']
})
export class FormDesignerEditComponent {

  myForm!: FormGroup;
  id!: string | null;
  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', action: () => this.router.navigate(['/']) },
      { label: 'Form Designer', action: () => this.router.navigate(['/form-designer']) },
      { label: 'Edit' }
    ]
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private rest: RestService,
    private poNotification: PoNotificationService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.myForm = this.formBuilder.group({
      tableName: ['', [Validators.required]],
      code: ['', [Validators.required]],
      captionBr: ['', [Validators.required]],
      captionEn: ['', [Validators.required]],
      captionEs: ['', [Validators.required]],
    });

    if (this.id) this.getData()
  }

  getData() {
    this.rest.get(`/forms/form-designer/${this.id}`).subscribe((res: any) => {
      this.myForm.patchValue(res);
    }, (err: any) => {
      console.log(err);
    });
  }

  save() {
    if (this.myForm.valid) {
      const data = this.myForm.value;
      data.FormField = [];
      if (this.id) data.id = parseInt(this.id);

      this.rest.post('/forms/form-designer', data).subscribe((res: any) => {
        console.log(res);
        this.poNotification.success('Saved successfully!');
        this.router.navigate(['/form-designer']);
      }, (err: any) => {
        this.poNotification.error('Error saving: ' + err.error || 'Unknown error');
        console.log(err);
      }
      );
    }
  }

  cancel() {
    this.router.navigate(['/form-designer']);
  }
}
