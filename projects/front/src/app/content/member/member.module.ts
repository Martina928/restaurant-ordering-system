import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';

import { MemberInfoComponent } from './member-info/member-info.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryOrderingComponent } from './history-ordering/history-ordering.component';


@NgModule({
  declarations: [
    MemberInfoComponent,
    HistoryDetailComponent,
    HistoryOrderingComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
