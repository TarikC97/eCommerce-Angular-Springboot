import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products!: Product[];
  currentCategoryId!: number;
  searchMode!: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute){}

  //Post constructor
  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    })
  }
  listProducts(){
    //We are performing search if has('keyword') is true.
    this.searchMode = this.route.snapshot.paramMap.has('keyword')

    if(this.searchMode){
      this.handleSearchProducts();
    }
    //If we are not searching show products by default.
    else{
      this.handleListProducts();
    }
  }
  handleSearchProducts(){
    //get keyword from search
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!
    //search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data=>{
        this.products = data;
      }
    )
  }
  handleListProducts(){
    //check if "id" parameter is available
    //snapshot - state of route in given moment, 
    //paramMap - Map of all the route parameters
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //get id and convert string to number
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else{
      //default category id
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data=>{
        this.products = data;
      }
    )
  }

}
 