import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { FormsModule } from '@angular/forms';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { StudentsComponent } from './components/parenttochild/students/students.component';
import { StudentdetailsComponent } from './components/parenttochild/studentdetails/studentdetails.component';
import { Child2Component } from './components/child2/child2.component';
import { ComponentLifeCycleComponent } from './components/component-life-cycle/component-life-cycle.component';
import { ProductFormComponent } from './components/task/product-form/product-form.component';
import { ParentComponent } from './components/task/parent/parent.component';
import { ProductTableComponent } from './components/task/product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    FormValidationComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ChildComponent,
    StudentsComponent,
    StudentdetailsComponent,
    Child2Component,
    ComponentLifeCycleComponent,
    ProductFormComponent,
    ParentComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
