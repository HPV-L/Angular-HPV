import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ChartModule} from "primeng/chart";
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { BannerComponent } from './component/banner/banner.component';
import { AppLayoutModule } from './layout/admin-layout/app.layout.module';

import { CategoriesComponent } from './component/categories/categories.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { SuperDealComponent } from './component/super-deal/super-deal.component';
import { MarketPlaceComponent } from './component/market-place/market-place.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

// PrimeNG
import { CalendarModule } from 'primeng/calendar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    BannerComponent,
    CategoriesComponent,
    ListproductComponent,
    SuperDealComponent,
    MarketPlaceComponent,
    DashboardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterOutlet,
    CalendarModule,
    PanelMenuModule,
    FormsModule,
    AppLayoutModule,
    HttpClientModule,
    CommonModule,
    ChartModule,
    MenuModule,
    TableModule,
    ButtonModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
