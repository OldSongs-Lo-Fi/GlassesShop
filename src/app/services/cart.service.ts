import { Injectable } from '@angular/core';
import {Glass} from "../models/Glass";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Glass[] = [];
  constructor() { }


  get cart(): Glass[] {
    return this._cart;
  }

  set cart(value: Glass[]) {
    this._cart = value;
  }

  addGlass(glass: Glass): Glass[]{
    this._cart.push(glass);
    return this._cart;
  }

  removeGlass(index: number): Glass[]{
    this._cart.splice(index, 1);
    return this._cart;
  }

  getSummaryPriceOfCart(): number{
    let price: number = 0;
    for (const product of this._cart) {
      price += product.price;
    }
    return price;
  }

  public getProductIds(): number[]{
    let products: number[] = [];
    for (let product of this._cart){
      products.push(product.id)
    }
    return products;
  }
}
