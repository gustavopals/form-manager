import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormManagerListComponent } from 'src/app/pages/forms/form-manager/form-manager-list/form-manager-list.component';
import { FormManagerEditComponent } from 'src/app/pages/forms/form-manager/form-manager-edit/form-manager-edit.component';

const routes: Routes = [
  {
    path: "",
    component: FormManagerListComponent
  },
  {
    path: "new",
    component: FormManagerEditComponent
  },
  {
    path: "edit/:id",
    component: FormManagerEditComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class FormManagerModule { }
