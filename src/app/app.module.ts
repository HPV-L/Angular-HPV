import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ChartModule} from "primeng/chart";
import { MenuModule } from 'primeng/menu';
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
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';

import { FormsModule } from '@angular/forms';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
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
    AdminProductListComponent
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
    StyleClassModule,
    FileUploadModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
