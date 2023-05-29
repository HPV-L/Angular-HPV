import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { BannerComponent } from './component/banner/banner.component';
import { AppLayoutComponent } from './layout/admin-layout/app.layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductListComponent } from './pages/admin/admin-product-list/admin-product-list.component';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
  ]},
  {path: "admin", component: AppLayoutComponent,children:[
    {path: "", redirectTo:"dashboard",pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent},
    {path: "product", component: AdminProductListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
