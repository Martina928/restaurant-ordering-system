import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_PATH } from '../../core/const/routing-path.const';
import { ProductComponent } from './product/product.component';
import { PointRedeemComponent } from './point-redeem/point-redeem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTING_PATH.PRODUCT,
    pathMatch: 'prefix'
  },
  {
    path: ROUTING_PATH.PRODUCT,
    component: ProductComponent
  },
  {
    path: ROUTING_PATH.POINT_REDEEM,
    component: PointRedeemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
