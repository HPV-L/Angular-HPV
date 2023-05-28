import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { BannerComponent } from './component/banner/banner.component';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
    {path:"",component:BannerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
