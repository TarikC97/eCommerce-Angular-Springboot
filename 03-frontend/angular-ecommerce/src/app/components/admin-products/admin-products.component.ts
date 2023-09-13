import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products: Product[] = [];
  thePageNumber: number = 1;
  currentCategoryId: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.allProducts()
   }
  deleteProduct(product: any){
    this.productService.deleteProduct(product).subscribe(
       data=>{
        alert('Product deleted')
      }
    )
   }
   allProducts(){
   this.productService.getProductListPaginate(this.thePageNumber-1,
    this.thePageSize,
    this.currentCategoryId)
    .subscribe(
     data=>{
       this.products = data._embedded.products;
       this.thePageNumber = data.page.number+1;
       this.thePageSize = data.page.size;
       this.theTotalElements = data.page.totalElements;
     }
    );
   }
}
