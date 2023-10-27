import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultComponent } from './pages/default/default.component';
const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "form-designer",
        loadChildren: () => import('./modules/forms/form-designer/form-designer.module').then(m => m.FormDesignerModule),
      },
      {
        path: "form-manager",
        loadChildren: () => import('./modules/forms/form-manager/form-manager.module').then(m => m.FormManagerModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
