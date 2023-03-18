import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {GlassesPageComponent} from "./pages/glasses-page/glasses-page.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CreateOrderComponent} from "./pages/create-order/create-order.component";
import {GlassComponent} from "./pages/glass/glass.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'createOrder', component: CreateOrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'glasses', component: GlassesPageComponent},
  {path: 'glass/:id', component: GlassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
