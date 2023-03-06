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

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlassService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
