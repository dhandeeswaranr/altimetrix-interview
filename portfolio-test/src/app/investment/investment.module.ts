import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentContainerComponent } from './container/investment-container/investment-container.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  {
    path:'',
    component:InvestmentContainerComponent
  }
]


@NgModule({
  declarations: [
    InvestmentContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class InvestmentModule { }
