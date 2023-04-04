import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/Order";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{



  readyToPost = false;
  fullName = ''
  mobilePhone = ''
  city = ''
  mail = ''
  mailAddress = ''
  email = ''
  price= 0
  products: number[] = []

  constructor(private orderService: OrderService,
              private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  onBlur(): void {
    //Data is checking
    this.readyToPost = !!(this.fullName.trim() &&
      this.email.trim() &&
      this.mobilePhone.trim().length > 9 &&
      this.city.trim() &&
      this.mail.trim() &&
      this.mailAddress.trim() &&
      this.email.trim());
  }
  public createOrder(): void{
    this.products = this.cartService.getProductIds();
    this.price = this.cartService.getSummaryPriceOfCart();
    let order: Order = {
      id: null,
      fullName: this.fullName,
      mobilePhone: this.mobilePhone,
      city: this.city,
      mail: this.mail,
      mailAddress: this.mailAddress,
      email: this.email,
      price: this.price,
      products: this.products
    };
    console.log("Order information:");
    console.log("id: " + order.id);
    console.log("Full name:", order.fullName);
    console.log("Mobile phone:", order.mobilePhone);
    console.log("City:", order.city);
    console.log("Email:", order.email);
    console.log("Mailing address:", order.mailAddress);
    console.log("Mail:", order.mail);
    console.log("Price:", order.price);
    console.log("Products:", order.products);
    this.orderService.addOrder(order);
  }

}
/*    console.log("2##############")
    console.log("Order information:");
    console.log("id: " + order.id);
    console.log("Full name:", order.fullName);
    console.log("Mobile phone:", order.mobilePhone);
    console.log("City:", order.city);
    console.log("Email:", order.email);
    console.log("Mailing address:", order.mailAddress);
    console.log("Mail:", order.mail);
    console.log("Price:", order.price);
    console.log("Products:", order.products);*/
