import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SubjectFilteredProductListComponent } from './components/subject-filtered-product-list/subject-filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { SubjectFilteredProductListComponentModule } from './components/subject-filtered-product-list/subject-filtered-product-list.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductListComponent }, { path: 'products', component: SubjectFilteredProductListComponent }, { path: 'products-sort', component: SortedProductListComponent }, { path: 'employees', component: EmployeeListComponent }]), FilteredProductListComponentModule, CategoriesServiceModule, ProductServiceModule, SubjectFilteredProductListComponentModule, SortedProductListComponentModule, EmployeeListComponentModule, EmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
