import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  //CRUD operations of order list
  private serverUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]>{
    return this.http.get<any>(`${this.serverUrl}/order`);
  }

  public getOrder(id: number): Observable<Order>{
    return this.http.get<Order>(`${this.serverUrl}/order/${id}`);
  }

  public addOrder(order: Order): any{
    console.log(JSON.stringify(order))
    return this.http.post<any>(`${this.serverUrl}/order/addOrder`, order).subscribe();
  }

  public updateOrder(order: Order): any{
    return this.http.put<any>(`${this.serverUrl}/order/addOrder`, order).subscribe();
  }
}
