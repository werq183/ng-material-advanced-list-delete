import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  private _ageSubject: Subject<string> = new Subject<string>();
  public age$: Observable<string> = this._ageSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.order$,
    this.age$
  ]).pipe(map(([employees, order, age]: [EmployeeModel[], string, string]) => {
    return employees.sort((a, b) => {
      if (a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
      if (a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
      return 0;
    }).filter((employees: EmployeeModel) => {
      if (age === '0-20') return employees.employee_age <= 20;
      else if (age === '21-30') return employees.employee_age > 20 && employees.employee_age <= 30;
      else if (age === '31-40') return employees.employee_age > 30 && employees.employee_age <= 40;
      else if (age === '41-50') return employees.employee_age > 40 && employees.employee_age <= 50;
      else if (age === '51-100') return employees.employee_age > 50 && employees.employee_age <= 100;
      return employees.employee_age;
    });
  }));
  public orders: Observable<string[]> = of(['asc', 'desc']);
  public ages: Observable<string[]> = of([
    'all',
    '0-20',
    '21-30',
    '31-40',
    '41-50',
    '51-100',
  ]);

  constructor(private _employeeService: EmployeeService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  selectAge(age: string): void {
    this._ageSubject.next(age);
  }

}
