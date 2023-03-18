import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/Order";

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
  constructor(private orderService: OrderService) {
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
  createOrder(): void{
    console.log('Order is creating');
    let order: Order = {
      fullName: this.fullName,
      mobilePhone: this.mobilePhone,
      city: this.city,
      mail: this.mail,
      mailAddress: this.mailAddress,
      email: this.email,
      price: this.price,
      products: this.products
    };
    console.log(order.fullName + ' ' + order.id);
    // this.orderService.addOrder(order);
  }

}
