import { Injectable } from '@angular/core';
import {ALL_PRODUCTS, IPHONES,IPADS,WATCHES,MACS} from './list-of-products';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  all = ALL_PRODUCTS;
  macs = MACS;
  ipads = IPADS;
  iphones = IPHONES;
  access= WATCHES;

  constructor() { }
  
  getAllProductsByCategoryId(id): Observable<any> {
    if(id===1)
      return of(this.macs);
      if(id===2)
      return of(this.ipads);
      if(id===3)
        return of(this.iphones);
      if(id==4){
        return of(this.access);
      }
      else
        return of(this.all);
  }

}
