import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormDesignerListComponent } from 'src/app/pages/forms/form-designer/form-designer-list/form-designer-list.component';
import { FormDesignerEditComponent } from 'src/app/pages/forms/form-designer/form-designer-edit/form-designer-edit.component';

const routes: Routes = [
  {
    path: "",
    component: FormDesignerListComponent
  },
  {
    path: "new",
    component: FormDesignerEditComponent
  },
  {
    path: "edit/:id",
    component: FormDesignerEditComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class FormDesignerModule { }
