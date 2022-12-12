import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobsModel } from '../models/jobs.model';

@Injectable()
export class JobsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<JobsModel[]> {
    return this._httpClient.get<JobsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }

  delete(id: string): Observable<JobsModel> {
    return this._httpClient.delete<JobsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/' + id);
  }
}
