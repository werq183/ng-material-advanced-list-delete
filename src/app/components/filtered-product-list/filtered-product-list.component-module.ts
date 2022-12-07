import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilteredProductListComponent } from './filtered-product-list.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import {FlexModule} from "@angular/flex-layout";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    CommonModule,
    FlexModule,
    RouterLink
  ],
  declarations: [FilteredProductListComponent],
  providers: [],
  exports: [FilteredProductListComponent]
})
export class FilteredProductListComponentModule {
}
