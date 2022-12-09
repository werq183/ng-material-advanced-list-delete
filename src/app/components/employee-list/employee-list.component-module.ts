import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { EmployeeListComponent } from './employee-list.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    FlexModule,
    NgForOf,
    AsyncPipe,
    CommonModule
  ],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
