import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  limits: number[] = [5, 15, 30, 50, 100];

  private _indexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public index$: Observable<number> = this._indexSubject.asObservable();
  private _sizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  public size$: Observable<number> = this._sizeSubject.asObservable();

  beers$: Observable<BeerModel[]> = this._beerService.getAll(
    this._indexSubject.value,
    this._sizeSubject.value
  );

  constructor(private _beerService: BeerService) {
  }

  handlePageEvent(e: PageEvent): void {
    this._indexSubject.next(e.pageIndex + 1);
    this._sizeSubject.next(e.pageSize);

    this._beerService
      .getAll(this._indexSubject.value, this._sizeSubject.value)
      .subscribe((data) => this.beers$);

    this.beers$ = this._beerService.getAll(
      this._indexSubject.value,
      this._sizeSubject.value
    );
  }
}
