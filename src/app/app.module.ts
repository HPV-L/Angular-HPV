import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { BannerComponent } from './component/banner/banner.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { SuperDealComponent } from './component/super-deal/super-deal.component';
import { MarketPlaceComponent } from './component/market-place/market-place.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    BannerComponent,
    CategoriesComponent,
    ListproductComponent,
    SuperDealComponent,
    MarketPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
