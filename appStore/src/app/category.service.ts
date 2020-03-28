import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { CATEGORIES } from './list-of-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categories = CATEGORIES;

  getCategories(): Observable<any> {
    return of(this.categories);
  }

}
