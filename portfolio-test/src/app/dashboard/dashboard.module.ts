import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  {
    path:"",
    component:DashboardContainerComponent
  }
]

@NgModule({
  declarations: [
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
