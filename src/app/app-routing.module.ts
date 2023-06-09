import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AppLayoutComponent } from './layout/admin-layout/app.layout.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AdminProductListComponent } from './pages/admin/product/admin-product-list/admin-product-list.component';
import { AdminProductEditComponent } from './pages/admin/product/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './pages/admin/product/admin-product-add/admin-product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CheckoutComponent } from './component/client/checkout/checkout.component';
import { CartDetailComponent } from './component/client/cart-detail/cart-detail.component';

import { AdminCategoryListComponent } from './pages/admin/category/admin-category-list/admin-category-list.component';
import { AdminCategoryAddComponent } from './pages/admin/category/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './pages/admin/category/admin-category-edit/admin-category-edit.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

import { AdminGuard } from './services/admin.guard';

import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { AboutContentComponent } from './component/about/about-content/about-content.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DetailOrderPageComponent } from './pages/detail-order-page/detail-order-page.component';


const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
    {path: "", component: HomePageComponent},
    {path: "shop", component: ShopPageComponent},
    {path: "blog", component: BlogPageComponent},
    {path: "about", component: AboutContentComponent},
    {path: "contact", component: ContactPageComponent},
    {path: "checkout", component: CheckoutComponent},
    {path: "detailorder", component: DetailOrderPageComponent},
    {path: "cart", component: CartDetailComponent},
   
  ]},
  

  {path: "admin", component: AppLayoutComponent, canActivate: [AdminGuard] ,
  children:[
    {path: "", redirectTo:"dashboard",pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},

    // products 
    {path: "product", component: AdminProductListComponent},
    {path:"product/:id/edit",component:AdminProductEditComponent},
    {path:"product/add",component:AdminProductAddComponent},
    //category
    {path: "category", component: AdminCategoryListComponent},
    {path:"category/:id/edit",component:AdminCategoryEditComponent},
    {path:"category/add",component:AdminCategoryAddComponent}
  ]},


  {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
