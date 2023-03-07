import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlassService} from "./services/glass.service";
import { ImageListComponent } from './components/image-list/image-list.component';
import {OrderService} from "./services/order.service";
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { CartComponent } from './pages/cart/cart.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { HeroComponent } from './components/hero/hero.component';
import { GlassesPageComponent } from './pages/glasses-page/glasses-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CreateOrderComponent,
    CartComponent,
    HeroComponent,
    GlassesPageComponent,
    FilterComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GlassService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
