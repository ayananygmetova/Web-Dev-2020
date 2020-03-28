import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { ALL_PRODUCTS} from './list-of-products';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  allProducts= ALL_PRODUCTS;

  constructor() { }

  
  getProductById(id): Observable<any> {
    const neededProduct = this.allProducts.find(product => product.productId === id);
    return of(neededProduct);
  }
}
