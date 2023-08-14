import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = []
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  

  constructor() { }

  addToCart(theCartItem: CartItem){
    //Check if we already have item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined!;
    if(this.cartItems.length>0){
      //find first item in the cart , if true =>quantity++
     existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id)!
     //check if we found it.
     alreadyExistsInCart = (existingCartItem != undefined)
    }
    if(alreadyExistsInCart){
      //qty=1+1
      existingCartItem.quantity++;
    }
    else{
      //add item to array(item through arg in params)
      this.cartItems.push(theCartItem)
    }
    //compute cart total price and total quantity
    this.CartTotal();

  }
  CartTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    for(let currCartItem of this.cartItems){
      totalPriceValue += currCartItem.quantity*currCartItem.unitPrice
      totalQuantityValue += currCartItem.quantity
    }
    //publish new value... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue)
    this.totalQuantity.next(totalQuantityValue)

    this.logCartData(totalPriceValue,totalQuantityValue)
  }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart')
    for(let item of this.cartItems){
      const subTotalPrice = item.quantity*item.unitPrice
      console.log(`name:${item.name}, quantity:=${item.quantity}, unitPrice=${item.unitPrice},subTotalPrice=${subTotalPrice}`)
    }
    console.log(`TotalPrice:${totalPriceValue.toFixed(2)},TotalQuantity:${totalQuantityValue}`)
    console.log('----')
  }
}
