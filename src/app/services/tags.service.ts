import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagsModel } from '../models/tags.model';

@Injectable()
export class TagsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TagsModel[]> {
    return this._httpClient.get<TagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }
}
