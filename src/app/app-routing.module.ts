import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AppLayoutComponent } from './layout/admin-layout/app.layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductListComponent } from './pages/admin/product/admin-product-list/admin-product-list.component';
import { AdminProductEditComponent } from './pages/admin/product/admin-product-edit/admin-product-edit.component';
import { AdminProductAddComponent } from './pages/admin/product/admin-product-add/admin-product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminCategoryListComponent } from './pages/admin/category/admin-category-list/admin-category-list.component';
import { AdminCategoryAddComponent } from './pages/admin/category/admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './pages/admin/category/admin-category-edit/admin-category-edit.component';


const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
    {path: "", component: HomePageComponent}
  ]},
  {path: "admin", component: AppLayoutComponent,children:[
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
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
