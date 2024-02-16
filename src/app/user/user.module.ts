import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbHighlight,
  NgbDatepickerModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { LandingComponent } from './components/landing/landing.component';
import { TransactionComponent } from './components/transaction/transaction.component';

import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DashboardService } from './user.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/landing',
        pathMatch: 'full',
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, LandingComponent, SideBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbHighlight,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [DashboardService],
})
export class UserModule {}
