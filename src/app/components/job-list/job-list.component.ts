import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TagsModel } from '../../models/tags.model';
import { JobsModel } from '../../models/jobs.model';
import { JobsService } from '../../services/jobs.service';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent {

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders: Observable<string[]> = of(['asc', 'desc']);
  readonly tags$: Observable<TagsModel[]> = this._tagsService.getAll();
  private _tagSubject: Subject<string> = new Subject<string>();
  public tag$: Observable<string> = this._tagSubject.asObservable();
  readonly jobs$: Observable<JobsModel[]> = combineLatest([
    this._jobsService.getAll(),
    this.order$,
    this.tag$
  ]).pipe(map(([jobs, order, tag]: [JobsModel[], string, string]) => {
    return jobs.sort((a, b) => {
      if (a.title > b.title) return order === 'asc' ? 1 : -1;
      if (a.title < b.title) return order === 'asc' ? -1 : 1;
      return 0;
    });
  }));


  constructor(private _jobsService: JobsService, private _tagsService: TagsService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  delete(id: string): void {
    this._jobsService.delete(id).subscribe();
  }

  selectTag(tag: string): void {
    this._tagSubject.next(tag);
  }
}
