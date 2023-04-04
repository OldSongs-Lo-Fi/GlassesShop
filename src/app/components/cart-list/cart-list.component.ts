import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Glass} from "../../models/Glass";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{

  public price: number = 0;
  public glasses: Glass[] = [];
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.glasses = this.cartService.cart;
    this.price = this.cartService.getSummaryPriceOfCart();
  }

  plusGlass(glass: Glass){
    this.glasses.push(glass);
    //PlusGlass
  }

  minusGlass(glass:Glass){
    const index = this.glasses.indexOf(glass);
    if (index !== -1) {
      this.glasses.splice(index, 1);
    }
  }

}
