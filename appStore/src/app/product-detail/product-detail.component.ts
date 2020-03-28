import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from 'src/app/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : any;
  constructor(private route: ActivatedRoute,  public productDetailService: ProductDetailService) { }

  ngOnInit(): void {
    this.getInfoAboutProduct();
  }

  getInfoAboutProduct(){
    const id =+this.route.snapshot.paramMap.get('id');
    this.productDetailService.getProductById(id).subscribe(pr=>this.product = pr);
  }

}
