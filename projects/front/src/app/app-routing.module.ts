import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_PATH } from './core/const/routing-path.const';
import { HomeComponent } from './content/home/home.component';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { LayoutComponent } from './core/component/layout/layout.component';

const routes: Routes = [
  {
    path: ROUTING_PATH.HOME,
    component: HomeComponent,
    canActivate: []
  },
  {
    path: ROUTING_PATH.LOGIN,
    component: LoginComponent,
    canActivate: []
  },
  {
    path: ROUTING_PATH.REGISTER,
    component: RegisterComponent,
    canActivate: []
  },
  {
    path: ROUTING_PATH.MENU,
    component: LayoutComponent,
    loadChildren: () => import('./content/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: ROUTING_PATH.MEMBER,
    component: LayoutComponent,
    loadChildren: () => import('./content/member/member.module').then(m => m.MemberModule)
  },
  {
    path: ROUTING_PATH.CHECK_OUT,
    component: LayoutComponent,
    loadChildren: () => import('./content/check-out/check-out.module').then(m => m.CheckOutModule)
  },
  {
    path: '**',
    redirectTo: ROUTING_PATH.HOME,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
