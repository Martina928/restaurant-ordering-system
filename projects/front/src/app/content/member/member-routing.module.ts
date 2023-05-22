import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_PATH } from '../../core/const/routing-path.const';
import { MemberInfoComponent } from './member-info/member-info.component';
import { HistoryOrderingComponent } from './history-ordering/history-ordering.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTING_PATH.MEMBER_INFO,
    pathMatch: 'prefix'
  },
  {
    path: ROUTING_PATH.MEMBER_INFO,
    component: MemberInfoComponent
  },
  {
    path: ROUTING_PATH.HISTORY_ORDERING,
    component: HistoryOrderingComponent,
    children: [
      {
        path: `${ROUTING_PATH.DETAIL}/:id`,
        component: HistoryDetailComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
