import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListComponentModule } from './components/job-list/job-list.component-module';
import { JobsServiceModule } from './services/jobs.service-module';
import {TagsServiceModule} from "./services/tags.service-module";

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'advanced-list', component: JobListComponent }]), JobListComponentModule, JobsServiceModule, TagsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
