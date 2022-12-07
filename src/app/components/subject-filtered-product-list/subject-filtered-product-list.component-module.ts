import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SubjectFilteredProductListComponent } from './subject-filtered-product-list.component';
import { RouterLink } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    AsyncPipe,
    RouterLink,
    FlexLayoutModule,
    CommonModule,
    FlexModule
  ],
  declarations: [SubjectFilteredProductListComponent],
  providers: [],
  exports: [SubjectFilteredProductListComponent]
})
export class SubjectFilteredProductListComponentModule {
}
