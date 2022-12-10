import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SubjectFilteredProductListComponent } from './subject-filtered-product-list.component';
import { RouterLink } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        MatCardModule,
        MatListModule,
        AsyncPipe,
        RouterLink,
        FlexLayoutModule,
        CommonModule,
        FlexModule,
        MatButtonModule
    ],
  declarations: [SubjectFilteredProductListComponent],
  providers: [],
  exports: [SubjectFilteredProductListComponent]
})
export class SubjectFilteredProductListComponentModule {
}
