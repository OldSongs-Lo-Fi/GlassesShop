import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlassService } from "./services/glass.service";
import { ImageListComponent } from './components/image-list/image-list.component';
import { OrderService } from "./services/order.service";
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './pages/cart/cart.component';
import { HeroComponent } from './components/hero/hero.component';
import { GlassesPageComponent } from './pages/glasses-page/glasses-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { IntroComponent } from './components/intro/intro.component';
import { GlassComponent } from './pages/glass/glass.component';
import { GlassInfoComponent } from './components/glass-info/glass-info.component';
import { RecomendationsComponent } from './components/recomendations/recomendations.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import {FormsModule} from "@angular/forms";
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    HeroComponent,
    GlassesPageComponent,
    FilterComponent,
    IntroComponent,
    GlassComponent,
    GlassInfoComponent,
    RecomendationsComponent,
    AddOrderComponent,
    CartListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [GlassService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
