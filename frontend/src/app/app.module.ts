import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { PoPageModule } from "@po-ui/ng-components"
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DefaultComponent } from './pages/default/default.component';
import { FormDesignerListComponent } from './pages/forms/form-designer/form-designer-list/form-designer-list.component';
import { FormDesignerEditComponent } from './pages/forms/form-designer/form-designer-edit/form-designer-edit.component';
import { FormManagerEditComponent } from './pages/forms/form-manager/form-manager-edit/form-manager-edit.component';
import { FormManagerListComponent } from './pages/forms/form-manager/form-manager-list/form-manager-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultComponent,
    FormDesignerListComponent,
    FormDesignerEditComponent,
    FormManagerEditComponent,
    FormManagerListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoPageModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
