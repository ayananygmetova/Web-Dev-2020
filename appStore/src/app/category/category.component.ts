import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any=[];

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoriesFromService();
  }

  getCategoriesFromService(){
    this.categoryService.getCategories().subscribe(ctg => this.categories = ctg);
  }


}
