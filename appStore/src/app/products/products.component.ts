import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any=[];
  constructor(private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.getListOfProducts();
  }

  getListOfProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getAllProductsByCategoryId(id).subscribe(pr => this.products = pr);
  }

}
