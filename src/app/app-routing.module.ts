import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AppLayoutComponent } from './layout/admin-layout/app.layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';


const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
    {path: "", component: HomePageComponent},
  ]},
  {path: "checkout", component: CheckoutComponent},
  {path: "cart", component: CartDetailComponent},
  {path: "admin", component: AppLayoutComponent,children:[
    {path: "", redirectTo:"dashboard",pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},
    {path: "product", component: AdminProductListComponent},
    {path:"product/:id/edit",component:AdminProductEditComponent},
    {path:"product/add",component:AdminProductAddComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
