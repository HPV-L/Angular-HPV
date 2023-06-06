import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ChartModule} from "primeng/chart";
import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { BannerComponent } from './component/client/banner/banner.component';
import { AppLayoutModule } from './layout/admin-layout/app.layout.module';

import { CategoriesComponent } from './component/home/categories/categories.component';
import { ListproductComponent } from './component/home/listproduct/listproduct.component';
import { SuperDealComponent } from './component/home/super-deal/super-deal.component';
import { MarketPlaceComponent } from './component/home/market-place/market-place.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';

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

import { AdminProductListComponent } from './pages/admin/product/admin-product-list/admin-product-list.component';
import { AdminProductAddComponent } from './pages/admin/product/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/product/admin-product-edit/admin-product-edit.component';
import { ChipsModule } from "primeng/chips";
import { InputMaskModule } from "primeng/inputmask";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";

import { HomePageComponent } from './pages/home-page/home-page.component';

import { CheckoutComponent } from './component/client/checkout/checkout.component';
import { NavComponent } from './component/client/nav/nav.component';
import { FooterComponent } from './component/client/footer/footer.component';
import { CartDetailComponent } from './component/client/cart-detail/cart-detail.component';

import { AdminCategoryListComponent } from './pages/admin/category/admin-category-list/admin-category-list.component';
import { AdminCategoryAddComponent } from './pages/admin/category/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './pages/admin/category/admin-category-edit/admin-category-edit.component';
import { HomeBlogComponent } from './component/home/home-blog/home-blog.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { NavShopComponent } from './component/shop/nav-shop/nav-shop.component';
import { ToolBoxComponent } from './component/shop/tool-box/tool-box.component';
import { ProductShopComponent } from './component/shop/product-shop/product-shop.component';
import { NavigationShopComponent } from './component/shop/navigation-shop/navigation-shop.component';
import { AsideShopComponent } from './component/shop/aside-shop/aside-shop.component';
import { SigninComponent } from './component/client/signin/signin.component';
import { SignupComponent } from './component/client/signup/signup.component';




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
    AdminProductListComponent,
    AdminProductAddComponent,
    AdminProductEditComponent,
    HomePageComponent,

    CheckoutComponent,
    NavComponent,
    FooterComponent,
    CartDetailComponent,

    AdminCategoryListComponent,
    AdminCategoryAddComponent,
    AdminCategoryEditComponent,
    HomeBlogComponent,
    ShopPageComponent,
    NavShopComponent,
    ToolBoxComponent,
    ProductShopComponent,
    NavigationShopComponent,
    AsideShopComponent,
    SigninComponent,
    SignupComponent
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
    ChipsModule ,
    InputMaskModule,
    CascadeSelectModule,
    MultiSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
